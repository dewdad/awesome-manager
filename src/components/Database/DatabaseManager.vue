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
          <v-select
              v-model="dbName"
              @change="updateEntity"
              label="Select Database Name"
              :items="entities"/>
          <v-select
              v-model="outputDocFile"
              label="Select Document Name"
              :items="templateDocs"/>
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
import {
  log,
  getFilesByExtentionInDir,
  ObjectKeysToArray,
  ImportCSV,
  GenerateCSV,
  ArrayToNedb,
} from "@/util";

import { LowdbForElectron } from "@/api/lowdb";
import { entities } from "@/api/globals";

import { join } from "path";

export default {
  data() {
    return {
      // entity DB instance
      entity: null,
      // entity name list
      entities: [],
      // entity name
      dbName: "",
      // Template dir path
      templateDir: "",
      outputJsonFile: "",
      outputDocFile: "",
      templateDocs: [],
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
  created() {
    this.entities = entities;
    this.findDocuments();
  },
  methods: {
    updateEntity() {
      this.entity = new LowdbForElectron(this.dbName);
    },
    findDocuments() {
      this.templateDir = path.join(remote.app.getPath("home"), "/Documents/template");
      log.suc("Template Directory is: " + this.templateDir);
      this.templateDocs = getFilesByExtentionInDir(this.templateDir, "doc");
      log.suc(this.templateDocs);
    },
    async importEntities(e) {
      /**
       * Import collection from a local json file
       */
      // Get File Object from html input
      let sourceFile = e.target.files[0];
      console.log(file);
      // Import csv file and return data of the papaparse results
      let data = await ImportCSV(sourceFile);
      console.log(data);
      // Put array to nedb
      if (Array.isArray(data)) {
        log.info("Start to write to persistence ...");
        data.forEach(item => {
          console.log(item);
          try {
            this.entity.db
              .read()
              .get(`${this.dbName}`)
              .push(item)
              .write();
          } catch (e) {
            throw new Error("添加数据失败!");
          }
        });
      } else {
        log.err("You must pass a array to save!");
      }
    },
    async exportEntities() {
      /**
       * Export data to file with file dialog
       */
      log.info("Exporting...");
      let csvFilePath = path.join(this.templateDir, `${this.dbName}.csv`);
      log.suc(filePath);
      // Export CSV
      try {
        let data = this.entity.db
          .read()
          .get(`${this.dbName}`)
          .value();
        GenerateCSV(data, csvFilePath);
        // open template file
        shell.showItemInFolder(csvFilePath);
        // shell.showItemInFolder(outputDocFile);
      } catch (e) {
        throw new Error("读取数据失败!");
      }
    },
    resetEntities() {
      let { source } = this.entity.adapter;
      alert("请手动删除以下Json文件：" + source);
      shell.showItemInFolder(source);
      // Delelet the file
      // shell.moveItemToTrash(collectionJsonFile);
    },
  },
};
</script>
