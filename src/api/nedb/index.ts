import { join } from "path";
import fs from "fs-extra";
import { remote, app, Remote, App } from "electron";
import { lowerFirst } from "lodash";
import Database, { DataStoreOptions } from "nedb";

export class nedbForElectron {
  isElectron: boolean;
  hasdbPath: boolean;
  hasdb: boolean;
  electronApp: App;
  db: Database;
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
      this.db = new Database(join(this.dbPath, `${dbName}.csv`));
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
   * 通过查询语句，获取数据，返回一个Promise<数据[]>
   * @param db Nedb datastore
   * @param query MongoDB-style query
   */
  find(entity: string, query: string) => {
    return new Promise((resolve, reject) => {
      this.db.find(query, (err: Error, document: any[]) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(document);
        }
      });
    });
  };

  /**
   * 获取Vuex中传递的载荷，如果有就删除Id字段，创建并返回Promise<插入的新数据>
   * @param cleanPayload MongoDB-style query
   */
  insert (entity, string, cleanPayload: any) => {
    return new Promise((resolve, reject) => {
      this.db.insert(cleanPayload, (err: Error, insertedDoc: any) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(insertedDoc);
        }
      });
    });
  };
  /**
   * 获取Vuex中传递的载荷，如果有就删除Id字段，更改并返回Promise<修改数据的数量>
   * @param query MongoDB-style query
   * @param cleanPayload MongoDB-style query
   */
  update (entity: string, query: any, cleanPayload: any) => {
    if (entity === undefined || cleanPayload === undefined || query === undefined) return;
    return new Promise((resolve, reject) => {
      this.db.update(query, cleanPayload, {}, (err: Error, numberOfUpdated: number) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(numberOfUpdated);
        }
      });
    });
  };

  /**
   * 获取Vuex中传递的载荷，如果有就删除Id字段，删除并返回Promise<删除数据的数量>
   * @param db Nedb datastore
   * @param query MongoDB-style query
   */
   delete (entity: string, query: any) => {
    if (entity === undefined || query === undefined) return;
    return new Promise((resolve, reject) => {
      this.db.remove(query, {}, (err: Error, numberOfDeleted: number) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(numberOfDeleted);
        }
      });
    });
  };
}

export const defaultDB = new nedbForElectron("data");

export default defaultDB.db;
