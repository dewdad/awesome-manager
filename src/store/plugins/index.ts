import pathifyPlugin from "./pathifyPlugin";
import ormPlugin from "./ormPlugin";
import { genLowdbPlugins, lowdbPlugin } from "./lowdbPlugin.simple";
// import lowdbPlugin from "./lowdbPlugin";
// import localForagePlugin from "./localForagePlugin";

export default [
  pathifyPlugin.plugin,
  ormPlugin,
  // ...genLowdbPlugins(),
  lowdbPlugin({ namespace: "entity"}),
  lowdbPlugin({ namespace: "user"}),
  lowdbPlugin({ namespace: "evaluation"}),
  lowdbPlugin({ namespace: "document"}),
  lowdbPlugin({ namespace: "activity"}),
  lowdbPlugin({ namespace: "militant"}),
  lowdbPlugin({ namespace: "resummee"}),
  lowdbPlugin({ namespace: "activity"}),
];
