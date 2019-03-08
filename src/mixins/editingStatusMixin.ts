import events, { Event } from '@/util/event'
const editingStatusEvent: Event = events.filter(event => event.name === 'EDITING_STATUS_CHANGED')[0]

export default {
  data() {
    return {
      editing: false,
      model: {}
    }
  },
  created() {
    this.$on(editingStatusEvent.name, editingStatusEvent.callback)
  }
}
