import { join } from "path";
import { copyFileSync, pathExistsSync } from "fs-extra";
import { remote, shell } from "electron";
import * as keysDef from "@/locales/cn.json";
import { getFilesByExtentionInDir, GenerateCSV, changeHeaderOfCSV } from "@/util";
export default {
  data() {
    return {
      outputDocFile: "template",
    };
  },
  computed: {
    templateDir: () => join(remote.app.getPath("home"), "/Documents/template"),
    userDataDir: () => join(remote.app.getPath("userData"), "data"),
    templateDocs: function() {
      return getFilesByExtentionInDir({ path: this.templateDir, ext: "doc" });
    },
    modelDatasource: function() {
      return this.resolvePath(this.modelName, "csv");
    },
    defaultDatasource: function() {
      return this.resolvePath("db", "csv");
    },
    defaultTemplate: function() {
      return this.resolvePath("template", "doc");
    },
    modelTemplate: function() {
      return this.resolvePath(this.outputDocFile, "doc");
    },
  },
  methods: {
    resolvePath(fileName, fileExt) {
      return join(this.templateDir, `${fileName}.${fileExt}`);
    },
    exportItem(item) {
      console.log(`导出${this.modelName}.csv文件...`);
      GenerateCSV({
        data: item,
        targetFilePath: this.modelDatasource,
        keysDef: keysDef.default,
        needTranslateHeader: true,
        onlyKeepStringValue: true,
      });

      setTimeout(() => {
        this.changeCSVHeader();
      }, 5000);

      setTimeout(() => {
        this.copyModelNameCSV();
      }, 1000);

      setTimeout(() => {
        this.mergeWordApp();
      }, 1000);
    },
    changeCSVHeader() {
      console.log("更新db.csv文件的列标题...");
      if (pathExistsSync(this.modelDatasource)) {
        changeHeaderOfCSV(this.modelDatasource)(keysDef.default);
      }
    },
    copyModelNameCSV() {
      console.log("备份为db.csv文件...");
      if (pathExistsSync(this.modelDatasource)) {
        copyFileSync(this.modelDatasource, this.defaultDatasource);
      }
    },
    mergeWordApp() {
      alert("进行Word邮件合并...");
      shell.showItemInFolder(this.defaultDatasource);
      shell.openItem(this.modelTemplate);
    },
  },
};
