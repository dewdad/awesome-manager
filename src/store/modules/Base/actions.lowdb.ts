/**
 * Actions
 * 1. Using types naming in separate file
 * 2. Using async functions to manage nedb
 * 3. Using my state and context
 * 4. Using plugin to read persistence after each commit
 */
import * as types from "@/store/types";

import { ActionContext } from "vuex";

import db from "@/api/lowdb";

const actions = {
  // Create New Item
  [types.aCreate]: (ctx: ActionContext<any, any>, payload: any) => {
    if (payload.id !== null) {
      delete payload.id;
    }
    try {
      db.read()
        .get(`${ctx.state.name}.data`)
        .insert(payload)
        .write();
      // refresh all
      ctx.dispatch(types.aRead, payload);
    } catch (e) {
      throw new Error("添加数据失败!");
    }
  },

  // Remove a Item
  [types.aDelete]: (ctx: ActionContext<any, any>, payload: any) => {
    try {
      db.read()
        .get(`${ctx.state.name}.data`)
        .remove({ id: payload.id })
        .write();
      // refresh all
      ctx.dispatch(types.aRead, payload);
    } catch (e) {
      throw new Error("删除数据失败!");
    }
  },

  // Update a Item
  [types.aUpdate]: (ctx: ActionContext<any, any>, payload: any) => {
    ctx.dispatch(types.aDelete, payload);
    try {
      db.read()
        .get(`${ctx.state.name}.data`)
        .insert(payload)
        .write();
      // refresh all
      ctx.dispatch(types.aRead, payload);
    } catch (e) {
      throw new Error("更新数据失败!");
    }
  },

  // Find all Item
  [types.aRead]: (ctx: ActionContext<any, any>, payload: any) => {
    try {
      let docs = db
        .read()
        .get(`${ctx.state.name}.data`)
        .value();
      ctx.commit(types.mRead, docs);
    } catch (e) {
      // Do something
      throw new Error("读取单个数据失败!");
    }
  },

  // Find a Item
  [types.aReadOne]: (ctx: ActionContext<any, any>, payload: any) => {
    try {
      let foundDoc = db
        .read()
        .get(`${ctx.state.name}.data`)
        .find({ id: payload.id })
        .value();
      if (foundDoc != null) ctx.commit(types.mRead, foundDoc);
    } catch (e) {
      throw new Error("读取单个数据失败!");
    }
  },
};

export default actions;
