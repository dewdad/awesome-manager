export default {
  // Add a Item with push
  CREATE_ITEM: (state, data) => {
    state.items.push(data)
  },

  // Delete
  DELETE_ITEM: (state, data) => {
    state.items = state.items.filter(item => item._id !== data._id)
  },

  // Update
  UPDATE_ITEM: (state, data) => {
    let item = state.items.filter(item => item._id === data._id)
    Object.assign(item, data)
  },

  // Read
  LOAD_ITEMS: (state, data) => {
    state.items = data
  }
}
