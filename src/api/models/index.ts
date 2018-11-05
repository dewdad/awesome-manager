function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
let files = require["context"](".", false, /\.ts$/);
let models = {};

files.keys().forEach(key => {
  if (key === "./index.ts") return;
  let modelName = capitalizeFirstLetter(key.replace(/(\.\/|\.ts)/g, ""));
  models[modelName] = files(key).default;
});

export default models;
