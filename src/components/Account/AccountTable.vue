<template>
  <v-card>
    <v-card-title>
      Account
    </v-card-title>
    <v-card-text>
      <AccountInfo :editing="editing"></AccountInfo>
    </v-card-text>
    <v-card-action>
      <AccountProfile></AccountProfile>
    </v-card-action>
  </v-card>
</template>
<script lang="js">
/* eslint-disable */
import { Component, Prop, Vue } from "vue-property-decorator";
import { get, sync, call } from "vuex-pathify";
import AccountInfo from "./AccountInfo";
import AccountProfile from "./AccountProfile";

export default {
  components: {
    AccountInfo,
    AccountProfile
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
