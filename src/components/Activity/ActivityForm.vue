<template>
  <v-card>
    <v-toolbar
        card
        prominent
        extended
        color="primary"
        dark="">
      <v-toolbar-title class="headline">
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-layout wrap>
        <v-flex
            sm6
            lg6>
          <v-text-field
              name="applicant"
              :label="$t('applicant')"
              v-model="model['applicant']"
          ></v-text-field>
        </v-flex>
        <v-flex
            sm6
            lg6>
          <v-menu
              class="pr-2"
              ref="occurenceDate"
              lazy
              :close-on-content-click="false"
              v-model="occurenceDateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              max-width="290px"
              :return-value.sync="model['occurenceDate']"
            >
            <v-text-field
                slot="activator"
                :label="$t('occurenceDate')"
                v-model="model['occurenceDate']"
                append-icon="event"
                readonly
            ></v-text-field>
            <v-date-picker
                v-model="model['occurenceDate']"
                no-title
                scrollable>
              <v-spacer></v-spacer>
              <v-btn
                  flat
                  color="primary"
                  @click="occurenceDateMenu = false">Cancel</v-btn>
              <v-btn
                  flat
                  color="primary"
                  @click="$refs.occurenceDate.save(model['occurenceDate'])">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex
            sm12
            lg12>
          <v-text-field
              name="content"
              :label="$t('content')"
              v-model="model['content']"
          ></v-text-field>
        </v-flex>
        <v-flex
            sm4
            lg4>
          <v-menu
              class="pr-2"
              ref="currentDate"
              lazy
              :close-on-content-click="false"
              v-model="currentDateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              max-width="290px"
              :return-value.sync="model['currentDate']"
            >
            <v-text-field
                slot="activator"
                :label="$t('currentDate')"
                v-model="model['currentDate']"
                append-icon="event"
                readonly
            ></v-text-field>
            <v-date-picker
                v-model="model['currentDate']"
                no-title
                scrollable>
              <v-spacer></v-spacer>
              <v-btn
                  flat
                  color="primary"
                  @click="currentDateMenu = false">Cancel</v-btn>
              <v-btn
                  flat
                  color="primary"
                  @click="$refs.currentDate.save(model['currentDate'])">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex
            sm4
            lg4>
          <v-menu
              ref="startTime"
              lazy
              :close-on-content-click="false"
              v-model="startTimeMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-24"
              max-width="290px"
              :return-value.sync="model['startTime']"
            >
            <v-text-field
                slot="activator"
                :label="$t('startTime')"
                v-model="model['startTime']"
                append-icon="access_time"
                readonly
            ></v-text-field>
            <v-time-picker v-model="model['startTime']">
              <v-spacer></v-spacer>
              <v-btn
                  flat
                  color="primary"
                  @click="startTimeMenu = false">Cancel</v-btn>
              <v-btn
                  flat
                  color="primary"
                  @click="$refs.startTime.save(model['startTime'])">OK</v-btn>
            </v-time-picker>
          </v-menu>
        </v-flex>
        <v-flex
            sm4
            lg4>
          <v-menu
              ref="endTime"
              lazy
              :close-on-content-click="false"
              v-model="endTimeMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-24"
              max-width="290px"
              :return-value.sync="model['endTime']"
            >
            <v-text-field
                slot="activator"
                :label="$t('endTime')"
                v-model="model['endTime']"
                append-icon="access_time"
                readonly
            ></v-text-field>
            <v-time-picker v-model="model['endTime']">
              <v-spacer></v-spacer>
              <v-btn
                  flat
                  color="primary"
                  @click="endTimeMenu = false">Cancel</v-btn>
              <v-btn
                  flat
                  color="primary"
                  @click="$refs.endTime.save(model['endTime'])">OK</v-btn>
            </v-time-picker>
          </v-menu>
        </v-flex>
        <v-flex
            sm6
            lg6>
          <v-menu
              class="pr-2"
              ref="reportDate"
              lazy
              :close-on-content-click="false"
              v-model="reportDateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              max-width="290px"
              :return-value.sync="model['reportDate']"
            >
            <v-text-field
                slot="activator"
                :label="$t('reportDate')"
                v-model="model['reportDate']"
                append-icon="event"
                readonly
            ></v-text-field>
            <v-date-picker
                v-model="model['reportDate']"
                no-title
                scrollable>
              <v-spacer></v-spacer>
              <v-btn
                  flat
                  color="primary"
                  @click="reportDateMenu = false">Cancel</v-btn>
              <v-btn
                  flat
                  color="primary"
                  @click="$refs.reportDate.save(model['reportDate'])">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex
            sm12
            lg12>
          <v-text-field
              name="reportContent"
              :label="$t('reportContent')"
              v-model="model['reportContent']"
          ></v-text-field>
        </v-flex>
        <v-flex
            sm6
            lg6>
          <v-menu
              class="pr-2"
              ref="instructionDate"
              lazy
              :close-on-content-click="false"
              v-model="instructionDateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              max-width="290px"
              :return-value.sync="model['instructionDate']"
            >
            <v-text-field
                slot="activator"
                :label="$t('instructionDate')"
                v-model="model['instructionDate']"
                append-icon="event"
                readonly
            ></v-text-field>
            <v-date-picker
                v-model="model['instructionDate']"
                no-title
                scrollable>
              <v-spacer></v-spacer>
              <v-btn
                  flat
                  color="primary"
                  @click="instructionDateMenu = false">Cancel</v-btn>
              <v-btn
                  flat
                  color="primary"
                  @click="$refs.instructionDate.save(model['instructionDate'])">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex
            sm12
            lg12>
          <v-text-field
              name="instruction"
              :label="$t('instruction')"
              v-model="model['instruction']"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          @click="saveItem(model)">{{editing ? "更新": "添加"}}</v-btn>
      <v-btn
          flat
          @click.native="exportItem(model)">导出数据</v-btn>
      <v-btn
          flat
          @click.native="mergeWordApp">合并打印</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="js">
import Activity from "@/api/models/Activity";
import crudMixin from "@/mixins/crudMixin";
import exportMixin from "@/mixins/exportMixin";
export default {
  data() {
    return {
      editing: false,
      model: {},
      modelName: "activity",
      occurenceDateMenu: false,
      currentDateMenu: false,
      reportDateMenu: false,
      instructionDateMenu: false,
      startTimeMenu: false,
      endTimeMenu: false,
    }
  },
  mixins: [crudMixin, exportMixin],
  created() {
    window.ActivityForm = this;
  },
}
</script>
