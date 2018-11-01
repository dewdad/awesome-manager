<template>
  <v-layout>
    <v-flex
        xs12
        sm6
        offset-sm3>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
              step="1"
              :complete="e1 > 1">1. 输入表名</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
              step="2"
              :complete="e1 > 2">2. 添加字段</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">3. Finish</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <!-- Step1 -->
          <v-stepper-content step="1">
            <v-card
                color="lighten-1"
                class="mb-5">
              <v-form>
                <v-text-field
                    placeholder="请起一个好听的表格名称"
                    v-model="dbName"></v-text-field>
              </v-form>
            </v-card>
            <v-btn
                color="primary"
                @click.native="addDatabase">下一步</v-btn>
            <v-btn @click.native="importAndExportCollection">取消</v-btn>
          </v-stepper-content>
          <!-- Step2 -->
          <v-stepper-content step="2">
            <v-card
                color="lighten-1"
                class="mb-5">
              <v-card-text>
                <v-form>
                  <v-text-field
                      placeholder="添加新的字段名，比如姓名"
                      v-model="fieldName"
                  ></v-text-field>
                  <v-text-field
                      placeholder="输入这个字段的值，比如Antonio，回车添加"
                      v-model="fieldValue"
                      @keyup.enter="updateSampleItem"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <!-- <v-list>
                   <v-list-tile v-bind:key="k" v-for="v, k of sampleItem">
                   <v-list-tile-content>
                   {{k}} : {{v}}
                   </v-list-tile-content>
                   </v-list-tile>
                   </v-list> -->
              <v-card-actions>
                <v-btn
                    color="primary"
                    @click.native="e1 = 3">下一步</v-btn>
                <v-btn @click.native="e1 = 1">取消</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <!-- Step3 -->
          <v-stepper-content step="3">
            <v-card>
              <v-card-actions>
                <v-btn
                    color="primary"
                    @click.native="InsertSampleData">完成</v-btn>
                <v-btn @click.native="e1 = 1">取消</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Mutation, Action, Getter } from "vuex-class";
import * as _ from "lodash";

import { log, ObjectKeysToArray, ImportCSV, GenerateCSV, ArrayToNedb } from "@/util";

import * as types from "@/store/types";

import { defaultCollections } from "@/api/models/BaseModel";
const nsDatabase = { namespace: types.nsDatabase };

import { dbOpen, dbCreate } from "@/api/nedb";
import { join } from "path";
import { remote, shell } from "electron";
const userDataPath = join(remote.app.getPath("userData"), "data");

@Component({
  components: {},
})
export default class CreateDatabaseSteper extends Vue {
  // Props
  e1: number = 0;

  dbName: string = "";

  arrFields: any[] = [];

  sampleItem: any = {};
  fieldName: string = "";
  fieldValue: string = "";

  constructor() {
    super();
  }

  async addDatabase() {
    // Action for Step 1
    dbCreate(this.dbName);
    this.e1 = 2;
  }

  updateSampleItem() {
    // Action for Step 2
    this.sampleItem[this.fieldName] = this.fieldValue;
    this.fieldName = "";
    this.fieldValue = "";
  }

  async InsertSampleData() {
    // add fields to new Object
    let doc = await dbOpen(this.dbName).insert(this.sampleItem);
    log.info(doc);

    // Navigate to Import and Export Page
    this.$router.push("/database/imexport");
  }

  /**
   * Playground:
   * Some stupid ways to do things right!
   */
  collectFieldsAndValues() {
    // Add Fields with value
    let oDoc: any = {};
    oDoc[this.fieldName] = this.fieldValue;

    /**
     * Merge field array into object
     *
     * For Example:
     * var firstInput = {
     *   'data': [{ 'user': 'barney' }]
     * };
     *
     * var secondInput = {
     *   'data': [{ 'age': 36 }]
     * };
     */

    this.arrFields.push({ data: [oDoc] });

    this.fieldName = "";
    this.fieldValue = "";
  }

  async createSampleItemWithMerge() {
    /**
     * Merge field array into object
     *
     * For Example:
     *
     * _.merge({}, firstInput, secondInput, ...);
     *
     * ==> { 'data': [{ 'user': 'barney', 'age': 36 }] }
     */
    let oDoc = { data: [] };
    this.arrFields.forEach((item: object) => {
      _.merge(oDoc, item);
    });
    let doc = await dbOpen(this.dbName).insert(oDoc.data[0]);
    log.info(doc);
  }

  importAndExportCollection() {
    this.e1 = 1;
    this.$router.push("/database/imexport");
  }
}
</script>
