import pathifyPlugin from "./pathifyPlugin";
import ormPlugin from "./ormPlugin";
import lowdbPlugin from "./lowdbPlugin";
export default [pathifyPlugin.plugin, ormPlugin, lowdbPlugin({ namespace: "users" })];
