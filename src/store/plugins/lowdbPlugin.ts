import db from '@/api/lowdb'
export default options => {
  return store => {
    // Every Mutations will be logged
    store.subscribe((mutation, state) => {
      console.log(`${options.namespace} type: ${mutation.type}`)
      console.log(`${options.namespace} payload _id: ${mutation.payload._id}`)
      let type = mutation.type.split('/')[1]
      if (type === 'CREATE_ITEM') {
        db.read()
          .get(`${options.namespace}.data`)
          .insert(mutation.payload)
          .write()
      }
      if (type === 'UPDATE_ITEM') {
        db.read()
          .get(`${options.namespace}.data`)
          .find({ _id: mutation.payload._id })
          .assign(mutation.payload)
          .write()
      }
      if (type === 'DELETE_ITEM') {
        db.read()
          .get(`${options.namespace}.data`)
          .remove({ _id: mutation.payload._id })
          .write()
      }
      if (type === 'SET_STATUS' && mutation.payload === 'loading') {
        let data = db
          .read()
          .get(`${options.namespace}.data`)
          .value()
        store.commit('LOAD_ITEMS', data)
        store.commit('SET_STATUS', 'doneLoading')
      }
    })
  }
}
