<template>
  <v-card>
    <v-card-title> Activity </v-card-title>
    <v-responsive>
      <v-data-table :headers="headers" :items="all" hide-actions class="elevation-0">
        <template slot="headers" slot-scope="props">
          <tr>
            <th v-for="header in props.headers" class="text-xs-left" :key="header">
              {{ $t(header) }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <td
            class="text-xs-left"
            :key="header"
            :autocomplete="props.item[header]"
            v-for="header in headers"
          >
            {{ props.item[header] }}
          </td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item);">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item);">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-responsive>
    <v-responsive> <ActivityInfo></ActivityInfo> </v-responsive>
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
  computed: {
    ...get("activity/*"),
  },
  created() {
    window.activityApp = this;
  },
  methods: {
    ...call("activity/*"),
    deleteItem(item) {
      this.actionDelete(item);
    },
    editItem(item) {
      this.editing = true;
      this.$store.set("activity/currentItem", item);
    },
  }
}
</script>
