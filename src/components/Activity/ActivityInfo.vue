<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex
          @click=" editing = !editing"
          xs12
          md12
          sm12>
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-flex>
      <v-text-field
          v-for="(v, k) of currentItem"
          v-if="k !== 'id'"
          v-model="currentItem[k]"
          :key="k"
          :label=" $t(k)">
      </v-text-field>
      <v-btn
          color="primary"
          @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
    </v-layout>
  </v-container>
</template>
<script lang="js">
import { Component, Prop, Vue } from "vue-property-decorator";
import { get, sync, call } from "vuex-pathify";

export default {
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
    ...sync("activity/*"),
  },
  methods: {
    ...call("activity/*"),
    saveItem() {
      if (this.editing) {
        this.actionUpdate(this.currentItem);
      } else {
        this.$store.set("activity/currentItem@id", "");
        this.actionCreate(this.currentItem);
      }
    }
  }
}
</script>
