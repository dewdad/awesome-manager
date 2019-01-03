import pathifyPlugin from "./pathifyPlugin";
import ormPlugin from "./ormPlugin";
import lowdbPlugin from "./lowdbPlugin";
export default [
  // pathify plugins stuff
  pathifyPlugin.plugin,
  // orm plugins stuff
  ormPlugin,
  // lowdb plugins stuff
  lowdbPlugin({ namespace: "generic" }),
  lowdbPlugin({ namespace: "resummee" }),
  lowdbPlugin({ namespace: "militant" }),
  lowdbPlugin({ namespace: "menu" }),
  lowdbPlugin({ namespace: "notification" }),
  lowdbPlugin({ namespace: "entity" }),
  lowdbPlugin({ namespace: "generic" }),
  lowdbPlugin({ namespace: "monthvisit" }),
  lowdbPlugin({ namespace: "social" }),
  lowdbPlugin({ namespace: "item" }),
  lowdbPlugin({ namespace: "location" }),
  lowdbPlugin({ namespace: "vacation" }),
  lowdbPlugin({ namespace: "contact" }),
  lowdbPlugin({ namespace: "user" }),
  lowdbPlugin({ namespace: "address" }),
  lowdbPlugin({ namespace: "mail" }),
  lowdbPlugin({ namespace: "file" }),
  lowdbPlugin({ namespace: "trending" }),
  lowdbPlugin({ namespace: "document" }),
  lowdbPlugin({ namespace: "account" }),
  lowdbPlugin({ namespace: "user" }),
  lowdbPlugin({ namespace: "activity" }),
];
