<template>
  <v-layout
      wrap
      row>

    <v-flex
        xs12
        sm12>
      <!-- Import Card -->
      <v-card>
        <v-card-title>
          <DatabaseSelector :dataFiles="collections"/>
          <v-radio-group
              v-model="radioGroup"
              row>
            <v-radio
                color="indigo"
                row
                v-for="n in ['导入', '导出', '删除']"
                :key="n"
                :label="`${n}`"
                :value="n"
            ></v-radio>
          </v-radio-group>
        </v-card-title>

      </v-card>
    </v-flex>

    <v-flex
        xs12
        sm12>
      <!-- Import Card -->
      <v-card v-show="radioGroup === '导入'">
        <v-toolbar class="primary white--text lighten-1">
          <v-layout
              row
              wrap>
            <v-flex
                xs6
                md6
                md-offset-3>
              <input
                  type="file"
                  multiple="multiple"
                  @change="importCollection($event)"/>
            </v-flex>
          </v-layout>
        </v-toolbar>
      </v-card>

      <!-- Export Card -->
      <v-card v-show="radioGroup === '导出'">
        <v-toolbar class="primary white--text lighten-1">
          <v-layout
              row
              wrap>
            <v-flex
                xs6
                md6
                md-offset-3>
              <v-btn
                  class="accent"
                  @click="exportCollection">
                导出数据
              </v-btn>
            </v-flex>
          </v-layout>
        </v-toolbar>
      </v-card>

      <!-- Reset Card -->
      <v-card v-show="radioGroup === '删除'" >
        <v-toolbar class="primary white--text lighten-1">
          <v-layout
              row
              wrap>
            <v-flex
                xs6
                md6
                md-offset-3>
              <v-btn
                  class="accent"
                  @click="resetCollection">
                重置数据
              </v-btn>
            </v-flex>
          </v-layout>
        </v-toolbar>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import { get, sync, call } from "vuex-pathify";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

import * as types from "@/store/types";
const namespace = { namespace: types.nsDatabase };

import {
  log,
  getFilesByExtentionInDir,
  ObjectKeysToArray,
  ImportCSV,
  GenerateCSV,
  ArrayToNedb,
} from "@/util";

import { remote, shell } from "electron";
import path from "path";
import fs from "fs";

import db from "@/api/lowdb";
import { collections } from "@/api/globals";

import { join } from "path";

const userDataPath = join(remote.app.getPath("userData"), "data");

import DatabaseSelector from "./DatabaseSelector.vue";
import DocumentSelector from "./DocumentSelector.vue";

export default {
  components: {
    DocumentSelector,
    DatabaseSelector,
  },
  data() {
    return {
      userTemplatePath: "",
      userDataPath: "",
      outputJsonFile: "",
      templateDocName: "",
      templateDocs: [],
      collections: [],
      // Is for import, verseversa export
      bIsImport: true,
      // Switch between import/export/reset
      radioGroup: "导入",
      alert: false,
      dialog: false,
      // If isEditing, dive into Edit Mode and show XForm
      isEditing: false,
    };
  },
  computed: {
    ...get("database/*"),
    collectionName: get("database/currentItem@name"),
    exportDocPath: get("database/export@docPath"),
    exportDataPath: get("database/export@dataPath"),
  },
  mounted() {
    this.findCollections();
    this.findDocuments();
  },
  methods: {
    ...call("database/*"),
    findCollections() {
      // Initialize the userData path and check db files
      this.userDataPath = userDataPath;
      this.collections = collections;
    },
    findDocuments() {
      this.userTemplatePath = path.join(remote.app.getPath("home"), "/Documents/template");
      log.suc("Template Directory is: " + this.userTemplatePath);
      this.templateDocs = getFilesByExtentionInDir(this.userTemplatePath, "doc");
      log.suc(this.templateDocs);
    },
    chooseCollection() {
      /**
       * If you select a collection by name, open the db file and get all data
       * into FilteredItems.
       * Based on the first item, auto generate table headers
       */
      log.info("You have chosen " + this.exportDataPath);
    },
    async importCollection(e) {
      /**
       * Import collection from a local json file
       */
      // Get File Object from html input
      let file = e.target.files[0];
      console.log(file);
      // Import csv file and return data of the papaparse results
      let data = await ImportCSV(file);
      console.log(data);
      // Put array to nedb
      if (Array.isArray(data)) {
        log.info("Start to write to persistence ...");
        data.forEach(item => {
          console.log(item);
          // FIXME: delete(item.id)
          try {
            db.read()
              .get(`${this.exportDataPath}.data`)
              .insert(item)
              .write();
          } catch (e) {
            throw new Error("添加数据失败!");
          }
        });
      } else {
        log.err("You must pass a array to save!");
      }
    },
    async exportCollection() {
      /**
       * Export data to file with file dialog
       */
      log.info("Exporting...");
      log.info("Template data file is: " + this.exportDataPath);
      let filePath = path.join(this.userTemplatePath, `${this.exportDataPath}.csv`);
      log.suc(filePath);
      // Export CSV
      try {
        let data = db
          .read()
          .get(`${this.exportDataPath}.data`)
          .value();
        GenerateCSV(data, filePath);
        // open template file
        shell.showItemInFolder(filePath);
      } catch (e) {
        // Do something
        throw new Error("读取数据失败!");
      }
    },
    resetCollection() {
      /**
       * Reset and clear a collection | table | db
       */
      // Locate the collection json file
      alert("请手动删除以下Json文件：" + this.exportDataPath);
      let collectionJsonFile = path.join(this.userDataPath, "/" + this.collectionName + ".json");
      shell.showItemInFolder(collectionJsonFile);
      // Delelet the file
      // shell.moveItemToTrash(collectionJsonFile);
    },
  },
};
</script>