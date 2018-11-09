import Datastore from "lowdb";
import LodashId from "lodash-id";
import FileSync from "lowdb/adapters/FileSync";
import Memory from "lowdb/adapters/Memory";
import { join } from "path";
import fs from "fs-extra";
import { remote, app } from "electron";

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
    return this.db.get(node).value();
  }
  /**
   * Init a set of default values
   */
  dbInit(nodes) {
    // Create user-level nodes like user.json
    this.dbCreateUserLevelnode(nodes);
  }

  /**
   * Create nodes from a array
   */
  dbCreateUserLevelnode(nodes) {
    nodes.forEach(node => {
      this.dbCreate(node);
    });
  }
  /**
   * Write a array to a key
   * { entity: []}
   * @param node key/entity as string, i.e. activity
   */
  dbCreate(node) {
    if (!this.db.has(node).value()) {
      this.db.set(node, []).write();
    }
  }
  /**
   * Remove a key
   */
  dbRemove(node) {
    if (!this.db.has(node).value()) {
      this.db.unset(node).write();
    }
  }
  /**
   * Inserta data in a specific key with orm entity namespace
   * @param entity orm entity namespace like activity
   * @param data data without id, since lodash-id will use unique id
   */
  insert(entity, data) {
    console.log("Inserting in lowdb...");
    try {
      delete data.id;
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
   * Update data in a specific key with orm entity namespace
   * @param entity orm entity namespace
   * @param query query statements
   * @param data data
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
   * Delete data in a specific key with orm entity namespace
   * @param entity orm entity namespace
   * @param query query statement
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
   * Find and Query data in a specific key with orm entity namespace
   * @param entity e
   * @param type
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
   * Find and Query data in a specific key with orm entity namespace
   * @param entity e
   * @param type
   */
  all(entity) {
    console.log("Querying in lowdb...");
    return this.db
      .read()
      .get(`${entity}`)
      .value();
  }

  /**
   * Find and Query data in a specific key with orm entity namespace
   * @param entity e
   * @param type
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
