<template>
  <div id="pageCard">
    <v-container
        grid-list-xl
        fluid>
      <v-layout
          wrap
          row>

        <v-flex
            class="mt-56"
            xs12
            md4
            sm4>
          <DatabasesIterator>
          </DatabasesIterator>
        </v-flex>
        <!-- start choice radio button -->
        <v-flex
            class="mt-56"
            xs12
            md4
            sm4>
          <!-- Import Card -->
          <v-card>
            <v-card-title>
              <v-select
                  v-model="modelName"
                  label="选择需要导出的数据表"
                  :items="entities"/>
            </v-card-title>

            <v-responsive class="mt-45">
              <v-radio-group
                  v-model="actionGroup"
                  row>
                <v-radio
                    color="indigo"
                    row
                    v-for="option in ['导入', '导出', '删除']"
                    :key="option"
                    :label="`${option}`"
                    :value="option"
                ></v-radio>
              </v-radio-group>
            </v-responsive>

            <v-responsive
                class="mt-45"
                v-show="actionGroup === '导入'">
              <input
                  type="file"
                  multiple="multiple"
                  @change="importEntities($event)"/>
              <v-radio-group
                  v-model="clearGroup"
                  row>
                <v-radio
                    color="indigo"
                    row
                    v-for="option in ['保留', '清除']"
                    :key="option"
                    :label="`${option}已有数据`"
                    :value="option"
                ></v-radio>
              </v-radio-group>
            </v-responsive>

            <v-responsive
                class="mt-45"
                v-show="actionGroup === '导出'">
              <!-- 仅导出CSV/Excel -->
              <v-btn
                  class="accent"
                  @click="exportEntities">
                导出到CSV/Excel
              </v-btn>
              <!-- 选择是否合并到Word -->
              <v-btn 
                v-show=" !needMergeWord "
                @click=" needMergeWord = !needMergeWord">
                选择Word模板
              </v-btn>
              <v-btn
                v-show=" needMergeWord "
                @click=" mergeWordApp ">
                开始导出打印
              </v-btn>
              <v-select
                  v-show=" needMergeWord "
                  v-model="outputDocFile"
                  label="选择Word目标文件，默认为template.doc"
                  :items="templateDocs"/>
              <!-- 选择是否需要翻译列标题 -->
              <v-btn
                @click=" changeCSVHeader ">
                翻译CSV/Excel标题
              </v-btn>
              <v-radio-group
                  v-model="reverseTranslate"
                  row>
                <v-radio
                    color="indigo"
                    row
                    v-for="option in ['外译中', '中译外']"
                    :key="option"
                    :label="`${option}第一行标题`"
                    :value=" option === '外译中' ? false : true "
                ></v-radio>
              </v-radio-group>
            </v-responsive>

            <v-responsive
                class="mt-45"
                v-show="actionGroup === '删除'">
              <v-btn
                  class="accent"
                  @click="resetEntities">
                重置数据
              </v-btn>
            </v-responsive>

          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>

import { shell } from "electron";
import { LowdbForElectron } from "@/api/lowdb";
import { entities } from "@/api/globals";
import models from "@/api/models";

import exportMixin from "@/mixins/exportMixin";

import DatabasesIterator from "./DatabasesIterator.vue";

import {
  log,
  ImportCSV
} from "@/util";

export default {
  components: {
    DatabasesIterator,
  },
  mixins: [ exportMixin ],
  data() {
    return {
      // entity file name/ csv file name / modelname
      modelName: "user",
      // Switch between import/export/reset
      actionGroup: "导入",
      // Import and clear
      clearGroup: "保留",
      changeHeaderGroup: false,
    };
  },
  created() {
    this.findDocuments();
  },
  computed: {
    // models instance for vuex/orm
    models: () => models,
    Model: () => this.models[`${this.modelName}`],
    // entity name list
    entities: () => entities,
  },
  methods: {
    findDocuments() {
      log.suc("Template Directory is: " + this.templateDir);
      this.templateDocs.forEach(t => log.suc(t));
    },
    async importEntities(e) {
      // 导入csv文件, 并更改列标题和对应键
      this.modelDatasource = e.target.files[0];
      this.importItem();
    },
    async exportEntities() {

      let data = this.Model.query()
        .withAll()
        .get();

      // 导出csv文件, 并更改列标题和对应键
      this.exportItem(data);
    },
    resetEntities() {
      // 删除文件中的数据
      let { entityDb, modelName } = this;
      if (entityDb === undefined || modelName === undefined) return;

      entityDB.clear(modelName);
      entityDB.dbInit([modelName]);
      // 删除物理文件
      alert("如需删除物理文件，请手动删除：" + entityDb.adapter.source);
      shell.showItemInFolder(entityDb.adapter.source);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .mt-45
    margin: 45px
  .mt-56
    margin: 56px
</style>
