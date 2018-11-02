<template lang="pug">
    div
      AccountHistory
      AccountTree
      v-timeline
        v-timeline-item(v-for="n in itemCounts" :key="n" color="red lighten-2" large)
          span(slot="opposite") {{currentItem.name}}
          v-card(class="elevation-2")
              v-card-title(class="headline") {{currentItem.password}}
              v-card-text {{currentItem.email}}
</template>
<script lang="js">
 // FIXME Component decorator does not work
import { Component, Prop, Vue } from "vue-property-decorator";
import { get, sync, call } from "vuex-pathify";
import AccountHistory from "./AccountHistory";
import AccountTree from "./AccountTree";

export default {
  components: {
      AccountHistory,
      AccountTree
  },
  props: {
     editing: false
  },
  data() {
      return {
      model: {
        actions: "Do it!"
      }
    }
  },
  computed: {
    ...get("account/*"),
  },
  methods: {
    ...call("account/*"),
    deleteItem(item) {
      this.actionDelete(item);
    }
  }
}
</script>
