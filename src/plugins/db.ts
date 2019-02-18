import { LowdbForElectron } from '@/api/lowdb'
import { entities } from '@/api/globals'

/**
 * Create lowdb files and set default fields
 * @return {Object} entitiesDb, ex: {user: DB}
 */
const pool = entities.reduce((entitiesDb, entity) => {
  const DB = new LowdbForElectron(entity)
  DB.dbCreate(entity)
  entitiesDb[entity] = DB
  return entitiesDb
}, {})

export default {
  install(Vue, options) {
    Vue.prototype.$pool = pool
  }
}
