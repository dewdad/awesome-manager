import { join } from "path";
import fs from "fs-extra";
import * as _ from "lodash";

// import datastore from "nedb";
import datastore from "nedb-promise";
import { entities } from "@/api/globals";
import { log } from "@/util";

import { remote, app } from "electron";

/////////////////////////////////////////////////////////////////////////
// Module
/////////////////////////////////////////////////////////////////////////

const APP = process.type === "renderer" ? remote.app : app;
const userPath = join(APP.getPath("userData"), "data");

if (process.type !== "renderer") {
  if (!fs.pathExistsSync(userPath)) {
    fs.mkdirpSync(userPath);
  }
}

let pool: any = {};

/**
 * Database persistence Module
 */

export function dbOpen(entity: string): any {
  return pool[entity];
}

/**
 * Init persistence database pool
 */
export function dbInit() {
  // Create user-level entities like user.json
  dbCreateUserLevelEntity(entities);
}

/**
 * Init persistence database pool
 */
export function dbResetAll() {
  // Create user-level entities like user.json
  entities.map(item => dbRemove(item));
}

/**
 * Creating a entity with real path and add to pool
 * @param entity Name of the db entity
 */
export function dbCreate(entity: string) {
  let fileName = `${entity}.json`;
  let filePath = join(userPath, fileName);
  // Create entities instance and add to pool
  let DB = datastore({
    autoload: true,
    filename: filePath,
  });
  pool[entity] = DB;
  // add entity information to entities
  let systemDB = dbOpen("database");
  systemDB.find({ entity: entity }).then((docs: any[]) => {
    if (docs.length === 0) systemDB.insert({ entity, fileName, filePath });
  });
}

/**
 * Create Default Entities if not exist
 *
 * Check the UserData Folder if user.json and other files exist
 * If not, call defaultEntities as array
 * Loop through and create databases files
 * Load into pool
 */
export function dbCreateUserLevelEntity(entities: string[]) {
  for (let entity of entities) {
    // check if other user-level entity exists
    dbCreate(entity);
    log.suc("Created " + entity + ".json in you UserData directory!");
  }
}

/**
 * Remove the entities.json files from hard disk
 */

export function dbRemove(entity: string) {
  let fileName = `${entity}.json`;
  let filePath = join(userPath, fileName);
  if (fs.existsSync(filePath)) {
    log.err("Removing...");
    fs.rmdirSync(filePath);
  }
}

/**
 * Database table operation Module
 * TODO: DEPRECATED: Now Every operation with `nedb-promise`
 * /

 /**
 * 通过查询语句，获取数据，返回一个Promise<数据[]>
 * @param db Nedb datastore
 * @param query MongoDB-style query
 */
export const findItem = (db: any, query: any) => {
  if (db === undefined || query === undefined) return;
  return new Promise((resolve, reject) => {
    db.find(query, (err: Error, document: any[]) => {
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
 * @param db Nedb datastore
 * @param cleanPayload MongoDB-style query
 */
export const addItem = (db: any, cleanPayload: any) => {
  if (db === undefined || cleanPayload === undefined) return;
  return new Promise((resolve, reject) => {
    db.insert(cleanPayload, (err: Error, insertedDoc: any) => {
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
 * @param db Nedb datastore
 * @param query MongoDB-style query
 * @param cleanPayload MongoDB-style query
 */
export const updateItem = async (db: any, query: any, cleanPayload: any) => {
  if (db === undefined || cleanPayload === undefined || query === undefined) return;
  return new Promise((resolve, reject) => {
    db.update(query, cleanPayload, {}, (err: Error, numberOfUpdated: number) => {
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
export const removeItem = async (db: any, query: any) => {
  if (db === undefined || query === undefined) return;
  return new Promise((resolve, reject) => {
    db.remove(query, {}, (err: Error, numberOfDeleted: number) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(numberOfDeleted);
      }
    });
  });
};
