import { join } from "path";
import fs from "fs-extra";
import { remote, app, App } from "electron";
import LodashId from "lodash-id";
import { lowerFirst } from "lodash";
import Datastore, { AdapterSync, LowdbSync } from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import Memory from "lowdb/adapters/Memory";

export class LowdbForElectron {
  isElectron: boolean;
  hasdbPath: boolean;
  hasdb: boolean;
  electronApp: App;
  adapter: AdapterSync;
  db: LowdbSync<any>;
  dbPath: string;

  constructor(dbName: string) {
    this.isElectron = this.ensureElectronEnv();
    this.hasdbPath = this.ensuredbPath("data");
    this.hasdb = this.createPersistence(dbName);
  }

  ensureElectronEnv() {
    this.electronApp = process.type === "renderer" ? remote.app : app;
    return true;
  }

  /**
   * Ensure the path of db file exists
   * @param {string} subDir subDirectory where data file stored
   */
  ensuredbPath(subDir: string) {
    if (this.electronApp !== undefined) {
      this.dbPath = join(this.electronApp.getPath("userData"), subDir);
    } else {
      this.dbPath = join(__dirname, subDir);
    }

    if (!fs.pathExistsSync(this.dbPath)) {
      fs.mkdirpSync(this.dbPath);
    }
    return true;
  }

  /**
   * Create lowdb store persisted in disk
   * @param {string} dbName Name of the store file
   */
  createPersistence(dbName: string) {
    if (this.dbPath !== undefined) {
      this.adapter = new FileSync(join(this.dbPath, `${dbName}.json`));
    } else {
      this.adapter = new Memory(dbName);
    }
    this.db = Datastore(this.adapter);
    this.db._.mixin(LodashId);
    return this.db === undefined ? false : true;
  }

  /**
   * Database persistence Module
   */

  dbOpen(node: string) {
    return this.db
      .read()
      .get(node)
      .value();
  }
  /**
   * Init a set of default values
   */
  dbInit(nodes: string[]) {
    // Create user-level nodes like user.json
    nodes && this.dbCreateUserLevelnode(nodes);
  }

  /**
   * Create nodes from a array
   */
  dbCreateUserLevelnode(nodes: string[]) {
    nodes &&
      nodes.forEach(node => {
        this.dbCreate(node);
      });
  }
  /**
   * Set a array as fefault value of a key or key or entity
   * { entity: []}
   * @param {string} node key or key or entity name, i.e. activity
   */
  dbCreate(node: string) {
    console.log(`creating default value in ${node} lowdb`);
    if (!this.db.has(node).value()) {
      this.db.set(node, []).write();
    } else {
      console.log(`${node} default value exists`);
    }
  }
  /**
   * Remove a key
   * @param {string} node key or key or entity name, i.e. activity
   */
  dbRemove(node: string) {
    if (!this.db.has(node).value()) {
      this.db.unset(node).write();
    }
  }
  /**
   * Inserta data in a specific key with key or entity namespace
   * @param {string} entity key or entity namespace like activity
   * @param {object} data data without id, since lodash-id will use unique id
   * @return {undefined} undefined
   */
  insert(entity: string, data: any) {
    console.log("Inserting in " + entity);
    // skip reinsert same _id
    if (this.find(entity, { _id: data._id }) !== undefined) {
      console.log("Identity Entity exites, skip!");
      return;
    }
    // delete if has id property, only for avoid lodash-id conflict
    data.id && delete data.id;
    return this.db
      .read()
      .get(`${lowerFirst(entity)}`)
      .push(data)
      .write();
  }

  /**
   * Update data in a specific key with key or entity namespace
   * @param {string} entity key or entity namespace
   * @param {object} query query statements
   * @param {object} data data
   * @return {undefined} undefined
   */
  update(entity: string, query: any, data: any) {
    console.log("Updating in " + entity);
    return this.db
      .read()
      .get(`${lowerFirst(entity)}`)
      .find(query)
      .assign(data)
      .write();
  }

  /**
   * Delete data in a specific key with key or entity namespace
   * @param {string} entity key or entity namespace
   * @param {object} query query statement
   * @return {undefined} undefined
   */
  delete(entity: string, query: any) {
    console.log("Deleting in " + entity);
    return this.db
      .read()
      .get(`${lowerFirst(entity)}`)
      .remove(query)
      .write();
  }

  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {string} entity key or entity namespace
   * @param {object} query query statement
   * @return {array, object, undefined} undefined is found nothing, else the data set
   */
  find(entity: string, query: any) {
    console.log("Querying in " + entity);
    return this.db
      .read()
      .get(`${lowerFirst(entity)}`)
      .find(query)
      .value();
  }
  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {string} entity key or entity namespace
   * @return {undefined} undefined
   */
  all(entity: string) {
    console.log("Querying in " + entity);
    return this.db
      .read()
      .get(`${lowerFirst(entity)}`)
      .value();
  }

  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {string} entity key or entity namespace
   */
  clear(entity: string) {
    console.log("Clearing in " + entity);
    this.db.set(`${lowerFirst(entity)}`, []).write();
  }
}

export const defaultDB = new LowdbForElectron("data");

export default defaultDB.db;
