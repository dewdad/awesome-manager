import { join } from "path";
import fs from "fs-extra";
import { remote, app } from "electron";
import Datastore from "lowdb";
import LodashId from "lodash-id";
import FileSync from "lowdb/adapters/FileSync";
import Memory from "lowdb/adapters/Memory";

export class LowdbForElectron {
  electronApp;
  adapter;
  db;
  dbPath;

  constructor(dbName) {
    this.electronApp = process.type === "renderer" ? remote.app : app;
    this.dbPath = this.enSuredbPath("data");
    this.createPersistence(dbName);
  }

  /**
   * Ensure the path of db file exists
   * @param {String} subDir subDirectory where data file stored
   */
  enSuredbPath(subDir) {
    let path;
    if (this.electronApp !== undefined) {
      path = join(this.electronApp.getPath("userData"), subDir);
    } else {
      path = join(__dirname, subDir);
    }

    if (!fs.pathExistsSync(path)) {
      fs.mkdirpSync(path);
    }
    return path;
  }

  /**
   * Create lowdb store persisted in disk
   * @param {String} dbName Name of the store file
   */
  createPersistence(dbName) {
    if (this.dbPath !== undefined) {
      this.adapter = new FileSync(join(this.dbPath, `${dbName}.json`));
    } else {
      this.adapter = new Memory(dbName);
    }
    this.db = Datastore(this.adapter);
    this.db._.mixin(LodashId);
  }

  /**
   * Database persistence Module
   */

  dbOpen(node) {
    return this.db.read().get(node).value();
  }
  /**
   * Init a set of default values
   */
  dbInit(nodes) {
    // Create user-level nodes like user.json
    nodes && this.dbCreateUserLevelnode(nodes);
  }

  /**
   * Create nodes from a array
   */
  dbCreateUserLevelnode(nodes) {
    nodes && nodes.forEach(node => {
      this.dbCreate(node);
    });
  }
  /**
   * Set a array as fefault value of a key or key or entity
   * { entity: []}
   * @param {String} node key or key or entity name, i.e. activity
   */
  dbCreate(node) {
    console.log("creating default value in lowdb...");
    if (!this.db.has(node).value()) {
      this.db.set(node, []).write();
    } else {
      console.log("data exists, loading...");
      this.db.read().get(node).value();
    }
  }
  /**
   * Remove a key
   * @param {String} node key or key or entity name, i.e. activity
   */
  dbRemove(node) {
    if (!this.db.has(node).value()) {
      this.db.unset(node).write();
    }
  }
  /**
   * Inserta data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace like activity
   * @param {Object} data data without id, since lodash-id will use unique id
   */
  insert(entity, data) {
    console.log("Inserting in lowdb...");
    try {
      data.id && delete data.id;
      this.db
        .read()
        .get(`${entity}`)
        .insert(data)
        .write();
    } catch (e) {
      return e;
    }
  }

  /**
   * Update data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace
   * @param {Object} query query statements
   * @param {Object} data data
   */
  update(entity, query, data) {
    console.log("Updating in lowdb...");
    try {
      this.db
        .read()
        .get(`${entity}`)
        .find(query)
        .assign(data)
        .write();
    } catch (e) {
      return e;
    }
  }

  /**
   * Delete data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace
   * @param {Object} query query statement
   */
  delete(entity, query) {
    console.log("Deleting in lowdb...");
    try {
      this.db
        .read()
        .get(`${entity}`)
        .remove(query)
        .write();
    } catch (e) {
      return e;
    }
  }

  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace
   * @param {Object} query query statement
   */
  find(entity, query) {
    console.log("Querying in lowdb...");
    return this.db
      .read()
      .get(`${entity}`)
      .filter(query)
      .value();
  }
  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace
   */
  all(entity) {
    console.log("Querying in lowdb...");
    return this.db
      .read()
      .get(`${entity}`)
      .value();
  }

  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace
   */
  clear(entity) {
    console.log("Querying in lowdb...");
    this.db
      .read()
      .unset(`${entity}`)
      .write();
  }
}

export const defaultDB = new LowdbForElectron("data");

export default defaultDB.db;
