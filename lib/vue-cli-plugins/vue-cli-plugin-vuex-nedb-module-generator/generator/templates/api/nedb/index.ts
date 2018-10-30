import { join } from "path";
import fs from "fs-extra";
import * as _ from "lodash";

// import datastore from "nedb";
import datastore from "nedb-promise";
import { collections } from "@/api/globals";

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

export function dbOpen(collection: string): any {
  return pool[collection];
}

/**
 * Init persistence database pool
 */
export function dbInit() {
  // Create user-level collections like user.json
  dbCreateUserLevelCollection(collections);
}

/**
 * Init persistence database pool
 */
export function dbResetAll() {
  // Create user-level collections like user.json
  collections.map(item => dbRemove(item));
}

/**
 * Creating a collection with real path and add to pool
 * @param collection Name of the db collection
 */
export function dbCreate(collection: string) {
  let fileName = `${collection}.json`;
  let filePath = join(userPath, fileName);
  // Create collections instance and add to pool
  let DB = datastore({
    autoload: true,
    filename: filePath,
  });
  pool[collection] = DB;
  // add collection information to collections
  let systemDB = dbOpen("database");
  systemDB.find({ collection: collection }).then((docs: any[]) => {
    if (docs.length === 0) systemDB.insert({ collection, fileName, filePath });
  });
}

/**
 * Create Default Collections if not exist
 *
 * Check the UserData Folder if user.json and other files exist
 * If not, call defaultCollections as array
 * Loop through and create databases files
 * Load into pool
 */
export function dbCreateUserLevelCollection(collections: string[]) {
  for (let collection of collections) {
    // check if other user-level collection exists
    dbCreate(collection);
    console.log("Created " + collection + ".json in you UserData directory!");
  }
}

/**
 * Remove the collections.json files from hard disk
 */

export function dbRemove(collection: string) {
  let fileName = `${collection}.json`;
  let filePath = join(userPath, fileName);
  if (fs.existsSync(filePath)) {
    console.log("Removing...");
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
