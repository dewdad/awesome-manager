/**
 * models is object to hold
 * {
 *   "user" : [user: User extends Model]
 * }
 */
import { toLower } from "lodash";

let files = require["context"](".", false, /\.ts$/);
let models = {};

files.keys().forEach(key => {
  if (key === "./index.ts") return;
  let modelName = toLower(key.replace(/(\.\/|\.ts)/g, ""));
  models[modelName] = files(key).default;
});

export default models;
