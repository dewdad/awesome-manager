<template>
  <v-card>
      <v-card-title>
          Activity
      </v-card-title>
      <v-card-text>
          <ActivityInfo :editing="editing"></ActivityInfo>
      </v-card-text>
  </v-card>
</template>
<script lang="js">
/* eslint-disable */
import { Component, Prop, Vue } from "vue-property-decorator";
import { get, sync, call } from "vuex-pathify";
import ActivityInfo from "./ActivityInfo";

export default {
  components: {
    ActivityInfo
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
    ...get("activity/*"),
  },
  methods: {
    ...call("activity/*"),
    deleteItem(item) {
      this.actionDelete(item);
    }
  }
}
</script>
