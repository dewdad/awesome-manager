import { LowdbForElectron } from '@/api/lowdb'
import { keyBy } from 'lodash'
import { Model } from '@vuex-orm/core'
import models from '@/api/models'

export const lowdbPlugin = options => {
  const entity = options.namespace || 'data'
  return store => {
    /**
     * Load the data from lowdb and commit to initial State
     */
    const entityDb: LowdbForElectron = new LowdbForElectron(entity)
    const data: any[] = entityDb.all(entity)
    const entityModel: Model = models[entity]
    // NOTE https://vuex-orm.github.io/vuex-orm/guide/advanced/interact-with-store-from-model.html#interacting-with-state
    if (Array.isArray(data)) {
      entityModel.commit(state => (state.data = keyBy(data, o => o['_id'])))
    }
  }
}

export const genLowdbPlugins = () => {
  let plugins = []
  Object.keys(models).forEach(entity => {
    plugins.push(lowdbPlugin({ namespace: entity }))
  })
  return plugins
}
