/**
 * models is object to hold
 * {
 *   "user" : [user: UserModule extends VuexModel]
 * }
 */
import { toLower } from "lodash";

let files = require["context"](".", false, /\.ts$/);
let modules = {};

files.keys().forEach(key => {
  if (key === "./index.ts") return;
  let moduleName = toLower(key.replace(/(\.\/|\.ts)/g, ""));
  modules[moduleName] = files(key).default;
});

console.log(modules);
export default modules;
