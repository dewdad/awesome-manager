import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexORM, { Database } from '@vuex-orm/core'

Vue.use(Vuex)

/**
 * Create a new Vuex Store with ORM plugin.
 * {Array<entity>} enties to pull, in format [{ model:..., module?:... }]
 * {String} namespace, normally is `entities` to use `state.entities`
 */
module.exports = function(entities = [], namespace = 'entities'): Store<any> {
  const database = new Database()

  entities.forEach(entity => {
    database.register(entity.model, entity.module || {})
  })

  return new Vuex.Store({
    plugins: [VuexORM.install(database, { namespace })],
    strict: true
  })
}
