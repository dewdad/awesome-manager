import { GenerateCSV } from "@/util";
import * as keysDef from "@/locales/cn.json";
import { join } from "path";
import { remote, shell } from "electron";
export default {
  methods: {
    exportItem(item) {
      let targetFilePath = "";
      if (this.modelName === "") {
        targetFilePath = join(remote.app.getPath("home"), "/Documents/template/db.csv");
      } else {
        targetFilePath = join(
          remote.app.getPath("home"),
          `/Documents/template/${this.modelName}.csv`,
        );
      }
      GenerateCSV({
        data: [item],
        targetFilePath,
        needTranslate: true,
        keysDef: keysDef.default,
      });
      shell.showItemInFolder(targetFilePath);
    },
  },
};
