import pathifyPlugin from "./pathifyPlugin";
import ormPlugin from "./ormPlugin";
import { genLowdbPlugins, lowdbPlugin } from "./ormLowdbPlugin.simple";
// import ormLowdbPlugin from "./ormLowdbPlugin";
// import localForagePlugin from "./localForagePlugin";

export default [
  pathifyPlugin.plugin,
  // ormLowdbPlugin,
  ormPlugin,
  // // ...genLowdbPlugins(),
  lowdbPlugin({ namespace: "entity" }),
  lowdbPlugin({ namespace: "user" }),
  lowdbPlugin({ namespace: "evaluation" }),
  lowdbPlugin({ namespace: "document" }),
  lowdbPlugin({ namespace: "activity" }),
  lowdbPlugin({ namespace: "militant" }),
  lowdbPlugin({ namespace: "resummee" }),
  lowdbPlugin({ namespace: "activity" }),
];
