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

            <v-responsive class="mt-45">
              <v-radio-group
                  v-model="actionGroup"
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

            <v-responsive class="mt-45" v-show="actionGroup === '导入'">
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
                    v-for="n in ['保留', '清除']"
                    :key="n"
                    :label="`${n}已有数据`"
                    :value="n"
                ></v-radio>
              </v-radio-group>
            </v-responsive>

            <v-responsive class="mt-45" v-show="actionGroup === '导出'">
              <v-btn
                  class="accent"
                  @click="exportEntities">
                导出数据
              </v-btn>
            </v-responsive>

            <v-responsive class="mt-45" v-show="actionGroup === '删除'">
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
import { join } from "path";
import { copyFileSync } from "fs";
import { shell, remote } from "electron";
import { LowdbForElectron } from "@/api/lowdb";
import { entities } from "@/api/globals";
import models from "@/api/models";
import * as keysDef from "@/locales/cn.json";
import DatabasesIterator from "./DatabasesIterator.vue";
import {
  log,
  getFilesByExtentionInDir,
  ObjectKeysToArray,
  stateObjectFromArray,
  ImportCSV,
  GenerateCSV,
  ArrayToNedb,
} from "@/util";
import { objectArrayFromClassKeys } from "@/util/transformer";

export default {
  components: {
    DatabasesIterator,
  },
  data() {
    return {
      // entity name list
      entities: [],
      // entity DB instance for lowdb
      entityDb: null,
      // models instance for vuex/orm
      models: null,
      // entity file name/ csv file name / modelname
      dbName: "",
      // Template dir path
      templateDir: "",
      userDataTemplateDir: "",
      outputJsonFile: "",
      outputDocFile: "",
      templateDocs: [],
      // Switch between import/export/reset
      actionGroup: "导入",
      // Import and clear
      clearGroup: "保留",
    };
  },
  created() {
    objectArrayFromClassKeys;
    this.entities = entities;
    this.models = models;
    this.findDocuments();
  },
  methods: {
    updateEntity() {
      this.entityDb = new LowdbForElectron(this.dbName);
    },
    findDocuments() {
      this.templateDir = join(remote.app.getPath("home"), "/Documents/template");
      log.suc("Template Directory is: " + this.templateDir);

      this.templateDocs = getFilesByExtentionInDir({ path: this.templateDir, ext: "doc" });
      this.templateDocs.forEach(t => {
        log.suc(t);
      });
    },
    copyDocument() {
      // 将word模板文件和字符定义配置拷贝到`HOME/documents/template`目录下
      this.templateDir = join(remote.app.getPath("home"), "/Documents/template");
      this.userDataTemplateDir = join(remote.app.getPath("userData"), "template");
      fs.copySync(this.appDataTemplateDir, this.templateDir);
    },
    refreshEntityState() {
      let { dbName } = this;
      if (dbName === undefined) return;

      let NSModel = this.models[`${dbName}`];
      NSModel.query()
        .withAll()
        .get();

      this.$router.push(`/${dbName}-table`);
    },
    async importEntities(e) {
      log.info("Importing...");

      // 导入csv文件, 并更改列标题和对应键名
      let data = await ImportCSV({
        file: e.target.files[0],
        needTranslate: true,
        keysDef: keysDef.default,
      });
      if (!Array.isArray(data)) return;

      // Make sure {this} is {that}
      let { entityDb, dbName } = this;
      if (entityDb === undefined || dbName === undefined) return;

      // 如果需要清除数据存储文件中的原有数据
      if (this.clearGroup === "清除") {
        entityDB.clear(dbName);
        entityDB.dbInit([dbName]);
      }

      // 逐个插入数据到数据存储文件
      data.forEach(item => {
        entityDb.insert(`${dbName}`, item);
      });

      // 刷新vuex状态
      // this.refreshEntityState();
    },
    async exportEntities() {
      log.info("Exporting...");

      let targetPath = join(this.templateDir, `${this.dbName}.csv`);
      log.suc(targetPath);

      let { dbName } = this;
      if (dbName === undefined) return;

      let NSModel = this.models[`${dbName}`];
      let data = NSModel.query()
        .withAll()
        .get();

      // 导出csv文件, 并更改列标题和对应键
      GenerateCSV({
        data,
        targetPath,
        needTranslate: true,
        keysDef: keysDef.default,
      });
      // 显示csv文件
      shell.showItemInFolder(targetPath);
    },
    resetEntities() {
      // 删除文件中的数据
      let { entityDb, dbName } = this;
      if (entityDb === undefined || dbName === undefined) return;

      entityDB.clear(dbName);
      entityDB.dbInit([dbName]);
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
