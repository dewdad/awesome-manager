export default {
  async createItem(ctx, data) {
    /**
     * Model.create(data: {})
     */
    const entities = await ctx.dispatch(
      `entities/${ctx.state.name}/insert`,
      { data },
      { root: true }
    )
    ctx.commit('CREATE_ITEM', entities[ctx.state.name][0])
  },
  async updateItem(ctx, data) {
    const entities = await ctx.dispatch(
      `entities/${ctx.state.name}/update`,
      { where: data._id, data },
      { root: true }
    )
    ctx.commit('UPDATE_ITEM', entities[ctx.state.name][0])
  },
  async deleteItem(ctx, data) {
    /**
     * Model.delete()
     */
    await ctx.dispatch(`entities/${ctx.state.name}/delete`, { where: data._id }, { root: true })
    ctx.commit('DELETE_ITEM', data)
  },
  async loadItems(ctx, options) {
    ctx.commit('SET_STATUS', options.loading || 'loading')
  }
}
