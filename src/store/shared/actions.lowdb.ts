import db from '@/api/lowdb'
export default {
  async createItemInDB(ctx, data) {
    try {
      db.read()
        .get(`${ctx.state.name}`)
        .insert(data)
        .write()
    } catch (e) {
      throw new Error('添加数据失败!')
    }
  },
  async deleteItemInDB(ctx, data) {
    try {
      db.read()
        .get(`${ctx.state.name}`)
        .remove({ _id: data._id })
        .write()
    } catch (e) {
      throw new Error('删除数据失败!')
    }
  },
  async updateItemInDB(ctx, data) {
    try {
      db.read()
        .get(`${ctx.state.name}`)
        .find({ _id: data._id })
        .assign(data)
        .write()
    } catch (e) {
      throw new Error('更新数据失败!')
    }
  },
  async readItemInDB(ctx, data) {
    try {
      let docs = db
        .read()
        .get(`${ctx.state.name}`)
        .value()
      return docs
    } catch (e) {
      // Do something
      throw new Error('读取单个数据失败!')
    }
  },
}
