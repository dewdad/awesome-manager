function uncapitalizeFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
}
let files = require["context"](".", false, /\.ts$/);
let models = {};

files.keys().forEach(key => {
  if (key === "./index.ts") return;
  let modelName = uncapitalizeFirstLetter(key.replace(/(\.\/|\.ts)/g, ""));
  models[modelName] = files(key).default;
});

export default models;
