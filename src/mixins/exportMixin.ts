
import { join } from "path";
import { copyFileSync } from "fs";
import { remote, shell } from "electron";
import * as keysDef from "@/locales/cn.json";
import {
  getFilesByExtentionInDir,
  GenerateCSV,
} from "@/util";
export default {
  data () {
    return {
      outputDocFile: "template"
    }
  },
  computed: {
    templateDir: () => join(remote.app.getPath("home"), "/Documents/template"),
    userDataDir: () => join(remote.app.getPath("userData"), "data"),
    templateDocs: function () { 
      return getFilesByExtentionInDir({ path: this.templateDir, ext: "doc" }) 
    },
  },
  methods: {
    resolvePath (fileName, fileExt) {
      return join(this.templateDir, `${fileName}.${fileExt}`);
    },
    exportItem(item) {
      let data;
      console.log(`导出${this.mdoelName}.csv文件...`);
      if (!Array.isArray(item)) {
        data = [item]
      } else {
        data = item;
      }
      GenerateCSV({
        data: data,
        targetFilePath: this.resolvePath(this.modelName, "csv"),
        needTranslate: true,
        keysDef: keysDef.default,
      });
      console.log("备份为db.csv文件...");
      this.copyModelNameCSV();
      alert("进行Word邮件合并...");
      this.mergeWordApp();
    },
    copyModelNameCSV() {
      copyFileSync(this.resolvePath(this.modelName, "csv"),this.resolvePath("db", "csv"));
    },
    mergeWordApp() {
      shell.showItemInFolder(this.resolvePath("db", "csv"));
      shell.openItem(this.resolvePath(this.outputDocFile, "doc"));
    }
  },
};
