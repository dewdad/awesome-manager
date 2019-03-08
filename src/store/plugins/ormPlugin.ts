import VuexORM, { Database, Query, Model } from '@vuex-orm/core'
import models from '@/api/models'
import modules from '@/store/modules'

import { LowdbForElectron } from '@/api/lowdb'

/**
 * 查询钩子
 * Query hooks
 */
Query.on('afterCreate', function(model: Model) {
  // NOTE https://vuex-orm.github.io/vuex-orm/guide/components/models.html#model-conventions
  // Get class static property with instance method $self
  // FIXMED afterCreate Hook, the model is a Model class instead of a plain object
  const entity = model.$self().entity
  console.log('Create Hook in ' + entity)
  const DB: LowdbForElectron = new LowdbForElectron(entity)
  DB.insert(entity, model)
})

Query.on('beforeDelete', function(model: Model) {
  // FIXMED beforeDelete, the model is just a plain object
  // So use the callback function scope [this] to get entity namespace
  // eslint-disable-next-line
  const { entity } = (this as Query);
  console.log('Delete Hook in ' + entity)
  const DB: LowdbForElectron = new LowdbForElectron(entity)
  DB.delete(entity, { _id: model._id })
})

Query.on('afterUpdate', function(model: Model) {
  const entity = model.$self().entity
  console.log('Update Hook in ' + entity)
  const DB: LowdbForElectron = new LowdbForElectron(entity)
  DB.update(entity, { _id: model._id }, model)
})

/**
 * 在数据库中注册模型和模块的函数
 * Database register model and modules
 */
export const registerDatabase = (models: any, modules: any): Database => {
  const database = new Database()
  Object.keys(models).map(key => {
    console.log(`Registering ORM for ${key} model`)
    database.register(models[key], modules[key] || {})
  })
  return database
}

/**
 * 在数据库中注册模型和模块
 */
export const database = registerDatabase(models, modules)

/**
 * 安装Lowedb ORM databse
 */
const ormPlugin = VuexORM.install(database)

export default ormPlugin
