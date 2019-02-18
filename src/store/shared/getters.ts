import { baseFilter } from '@/util'
const getters = {
  moduleName: state => state.name,
  itemCounts: state => state.items.length,
  itemKeys: state => {
    return Object.keys(state.currentItem)
  },
  itemKeysNoId: state => {
    return Object.keys(state.currentItem).filter(keyName => keyName !== '_id')
  },
  itemFiltered: state => {
    return baseFilter(state.filter.sort)(state.filter.search)(state.items)
  },
  itemLimited: state => {
    return state.filter.limit ? state.items.slice(0, state.filter.limit) : state.items
  }
}
export default getters
