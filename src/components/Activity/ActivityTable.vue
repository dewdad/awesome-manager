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
import { Component, Prop, Vue } from "vue-property-decorator";

import { get, sync, call } from "vuex-pathify";

import ActivityInfo from "@/components/Activity/ActivityInfo.vue";

@Component({
  components: {
    ActivityInfo,
  },
})
export default class ActivityTable extends Vue {
  editing: boolean = true;
}
</script>
