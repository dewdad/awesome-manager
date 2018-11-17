import pathifyPlugin from "./pathifyPlugin";
import ormPlugin from "./ormPlugin";
import lowdbPlugin from "./lowdbPlugin";
export default [
  // pathify plugins stuff
  pathifyPlugin.plugin,
  // orm plugins stuff
  ormPlugin,
  // lowdb plugins stuff
  lowdbPlugin({ namespace: "document" }),
  lowdbPlugin({ namespace: "account" }),
  lowdbPlugin({ namespace: "user" }),
  lowdbPlugin({ namespace: "activity" }),
];
