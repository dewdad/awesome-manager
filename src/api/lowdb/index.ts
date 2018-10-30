import Datastore from "lowdb";
import LodashId from "lodash-id";
import FileSync from "lowdb/adapters/FileSync";
import { join } from "path";
import fs from "fs-extra";
import { remote, app } from "electron";

import { collections } from "../globals";

const APP = process.type === "renderer" ? remote.app : app;
const userPath = join(APP.getPath("userData"), "data") || "";

// if (process.type !== "renderer") {
if (!fs.pathExistsSync(userPath)) {
  fs.mkdirpSync(userPath);
}
// }

/**
 * 只使用一个大的数据文件,用键值表示每个集合 collection
 * db = {
 *   user: { name: user, data: [] }
 * }
 */
const adapter = new FileSync(join(userPath, "data.json"));

const db = Datastore(adapter);
db._.mixin(LodashId);

/**
 * Database persistence Module
 */

export function dbOpen(collection: string): any {
  return db.get(collection).value();
}
/**
 * Init persistence database pool
 */
export function dbInit() {
  // Create user-level collections like user.json
  dbCreateUserLevelCollection(collections);
}

export function dbCreateUserLevelCollection(collections: string[]) {
  collections.forEach(collection => {
    dbCreate(collection);
  });
}
export function dbCreate(collection: string) {
  if (!db.has(collection).value()) {
    db.set(collection, { name: collection, data: [] }).write();
  }
}
export function dbRemove(collection: string) {
  if (!db.has(collection).value()) {
    db.get(collection)
      .remove()
      .write();
  }
}

export default db;
