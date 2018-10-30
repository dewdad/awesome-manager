<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex
          xs12
          md12
          sm12>
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import { get, sync, call } from "vuex-pathify";

export default class ActivityInfo extends Vue {}
</script>
