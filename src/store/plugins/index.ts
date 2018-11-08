import pathifyPlugin from "./pathifyPlugin";
import ormPlugin from "./ormPlugin";
import lowdbPlugin from "./lowdbPlugin";
export default [
  pathifyPlugin.plugin,
  ormPlugin,
  lowdbPlugin({ namespace: "account" }),
  lowdbPlugin({ namespace: "user" }),
  lowdbPlugin({ namespace: "activity" }),
];
