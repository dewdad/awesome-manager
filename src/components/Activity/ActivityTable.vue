<template>
  <v-card>

    <!-- dialoge -->
    <v-dialog
        v-model="dialog"
        width="80%">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <!-- User Input Form -->
          <ActivityInfo :editing="editing" />
          <!-- End Form -->
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end dialog -->

  </v-card>
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Prop, Vue } from "vue-property-decorator";
import { ComponentOptions } from "vue";
import { get, sync, call } from "vuex-pathify";
import * as types from "@/store/types";

import ActivityInfo from "@/components/Activity/ActivityInfo.vue";
import DatabaseSelector from "@/components/Database/DatabaseSelector.vue";
import DocumentSelector from "@/components/Database/DocumentSelector.vue";

import defaultActivity from "@/api/models/Activity";

import { log, getFilesByExtentionInDir, GenerateCSV } from "@/util";

import { remote, shell } from "electron";
import path from "path";

const computed = { ...get("activity/*")}
const methods = { ...call("activity/*")}

@Component({
  components: {
    ActivityInfo,
  },
  /* eslint-disable-next-line */
  computed
})
export default class ActivityTable extends Vue {
  // Props
  dialog = false;
  editing = false;
  formTitle = "活动信息";

  mounted() {
      console.log(computed)
  }

  deleteItem(item) {
    this.actionDelete(item);
  }
}
</script>
