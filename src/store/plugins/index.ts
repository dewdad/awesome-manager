import pathifyPlugin from './pathifyPlugin'
import ormPlugin from './ormPlugin'
import { genLowdbPlugins, lowdbPlugin } from './ormLowdbPlugin.simple'
import ormLowdbPlugin from './ormLowdbPlugin'
// import persistPlugin from "./persistPlugin";
// import localForagePlugin from "./localForagePlugin";

export default [
  ormLowdbPlugin,
  // persistPlugin,
  pathifyPlugin.plugin
  // ormPlugin,
  // // ...genLowdbPlugins(),
  // lowdbPlugin({ namespace: "entity" }),
  // lowdbPlugin({ namespace: "user" }),
  // lowdbPlugin({ namespace: "evaluation" }),
  // lowdbPlugin({ namespace: "document" }),
  // lowdbPlugin({ namespace: "activity" }),
  // lowdbPlugin({ namespace: "militant" }),
  // lowdbPlugin({ namespace: "resummee" }),
  // lowdbPlugin({ namespace: "activity" }),
]
