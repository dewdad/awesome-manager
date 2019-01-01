<template>
  <v-layout
      wrap
      row>

    <!-- start choice radio button -->
    <v-flex
        xs12
        md4
        sm6>
      <!-- Import Card -->
      <v-card>
        <v-card-title>
          <v-select
              v-model="dbName"
              @change="updateEntity"
              label="Select Database Name"
              :items="entities"/>
          <v-select
              v-show="false"
              v-model="outputDocFile"
              label="Select Document Name"
              :items="templateDocs"/>
        </v-card-title>

        <v-responsive>
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
        </v-responsive>

        <v-responsive v-show="radioGroup === '导入'">
          <input
              type="file"
              multiple="multiple"
              @change="importEntities($event)"/>
        </v-responsive>

        <v-responsive v-show="radioGroup === '导出'">
          <v-btn
              class="accent"
              @click="exportEntities">
            导出数据
          </v-btn>
        </v-responsive>

        <v-responsive v-show="radioGroup === '删除'">
          <v-btn
              class="accent"
              @click="resetEntities">
            重置数据
          </v-btn>
        </v-responsive>

      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import { join } from "path";
import { shell, remote } from "electron";
import { LowdbForElectron } from "@/api/lowdb";
import { entities } from "@/api/globals";
import {
  log,
  getFilesByExtentionInDir,
  ObjectKeysToArray,
  ImportCSV,
  GenerateCSV,
  ArrayToNedb,
} from "@/util";

export default {
  data() {
    return {
      // entity DB instance
      entityDb: null,
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
    };
  },
  created() {
    this.entities = entities;
    this.findDocuments();
  },
  methods: {
    updateEntity() {
      this.entityDb = new LowdbForElectron(this.dbName);
    },
    findDocuments() {
      this.templateDir = join(remote.app.getPath("home"), "/Documents/template");
      log.suc("Template Directory is: " + this.templateDir);

      this.templateDocs = getFilesByExtentionInDir(this.templateDir, "doc");
      log.suc(this.templateDocs);
    },
    async importEntities(e) {
      log.info("Importing...");

      let sourceFile = e.target.files[0];
      log.info(sourceFile);

      let data = await ImportCSV(sourceFile);
      if (!Array.isArray(data)) return;
      log.info(data);

      // Make sure {this} is {that}
      let { entityDb, dbName } = this;
      if (entityDb === undefined || dbName === undefined) return;

      data.forEach(item => {
        entityDb.insert(`${dbName}`, item);
      });
    },
    async exportEntities() {
      log.info("Exporting...");

      let targetPath = join(this.templateDir, `${this.dbName}.csv`);
      log.suc(targetPath);

      let { entityDb, dbName } = this;
      if (entityDb === undefined || dbName === undefined) return;

      let data = entityDb.all(`${dbName}`);
      if (!Array.isArray(data)) return;

      GenerateCSV(data, targetPath);
      shell.showItemInFolder(targetPath);
    },
    resetEntities() {
      let { source } = this.entityDb.adapter;
      alert("请手动删除以下Json文件：" + source);
      shell.showItemInFolder(source);
    },
  },
};
</script>
