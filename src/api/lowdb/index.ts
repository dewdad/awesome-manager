import { join } from "path";
import fs from "fs-extra";
import { remote, app, Remote, App } from "electron";
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
    // add to window/global object
    (window as any).electronApp = process.type === "renderer" ? remote.app : app;
    return true;
  }

  /**
   * Ensure the path of db file exists
   * @param {String} subDir subDirectory where data file stored
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
   * @param {String} dbName Name of the store file
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
   * @param {String} node key or key or entity name, i.e. activity
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
   * @param {String} node key or key or entity name, i.e. activity
   */
  dbRemove(node: string) {
    if (!this.db.has(node).value()) {
      this.db.unset(node).write();
    }
  }
  /**
   * Inserta data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace like activity
   * @param {Object} data data without id, since lodash-id will use unique id
   */
  insert(entity: string, data: any) {
    console.log("Inserting in " + entity);
    try {
      data.id && delete data.id;
      this.db
        .read()
        .get(`${lowerFirst(entity)}`)
        .push(data)
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
  update(entity: string, query: any, data: any) {
    console.log("Updating in " + entity);
    try {
      this.db
        .read()
        .get(`${lowerFirst(entity)}`)
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
  delete(entity: string, query: any) {
    console.log("Deleting in " + entity);
    try {
      this.db
        .read()
        .get(`${lowerFirst(entity)}`)
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
  find(entity: string, query: any) {
    console.log("Querying in " + entity);
    return this.db
      .read()
      .get(`${lowerFirst(entity)}`)
      .filter(query)
      .value();
  }
  /**
   * Find and Query data in a specific key with key or entity namespace
   * @param {String} entity key or entity namespace
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
   * @param {String} entity key or entity namespace
   */
  clear(entity: string) {
    console.log("Clearing in " + entity);
    this.db.set(`${lowerFirst(entity)}`, []).write();
  }
}

export const defaultDB = new LowdbForElectron("data");

export default defaultDB.db;
