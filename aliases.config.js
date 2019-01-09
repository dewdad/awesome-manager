const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

const aliases = {
  "@design": "src/style/index.scss",
  "@lib": "lib",
  "@docs": "docs",
  "@config": "config",
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

function createConfig(_templatePath, _targetPath) {
  const configTemplate = require(_templatePath) || {};
  fs.writeFile(
    _targetPath,
    prettier.format(
      JSON.stringify({
        ...configTemplate,
        compilerOptions: {
          ...(configTemplate.compilerOptions || {}),
          paths: module.exports.jsconfig,
        },
      }),
      {
        ...require("./.prettierrc"),
        parser: "json",
      },
    ),
    error => {
      if (error) {
        console.error("Error while creating jsconfig.json from aliases.config.js.");
        throw error;
      }
    },
  );
}
