function uncapitalizeFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase()
}
let files = require['context']('.', false, /\.js$/)
let models = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  let modelName = uncapitalizeFirstLetter(key.replace(/(\.\/|\.js)/g, ''))
  models[modelName] = files(key).default
})

export default models
