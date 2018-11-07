import VuexORM, { Database } from '@vuex-orm/core'
import models from '@/api/models'
import modules from '@/store/modules'

const database = new Database()

Object.keys(models).map(key => {
  console.log(key)
  database.register(models[key], modules[key])
})

const ormPlugin = VuexORM.install(database)

export default ormPlugin
