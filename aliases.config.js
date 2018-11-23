const aliases = {
  "@design": "src/style/main.scss",
};

module.exports = {
  webpack: {},
  jest: {},
  jsconfig: {},
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  module.exports.jest["^" + alias + "/(.*)$"] = "<rootDir>/" + aliasTo + "/$1";
}

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
