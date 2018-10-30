const fs = require("fs");
const path = require("path");
// Helper functions
const {
  checkInstalled,
  exists,
  writeFile,
  readEnv,
  buildEnvContent,
  capitalizeFirstLetter,
  uncapitalizeFirstLetter,
} = require("../util");
module.exports = (api, options, rootOptions) => {
  try {
    const pkg = {
      dependencies: {
        "prisma-binding": "^2.1.6",
        "prisma-client-lib": "^1.18.0",
        "graphql": "^14.0.0",
        "ts-node": "7.0.1",
      },
      scripts: {
        "prisma:demo": "ts-node --project tsconfig.json src/prisma/js-client/demo.ts",
        "prisma:now": "sh config-now.sh && now",
        "prisma:deploy": "prisma deploy -e /.env",
        "prisma:generate": "prisma generate",
      }
    };
    api.extendPackage(pkg);
  } catch (err) {
	  console.log(err);
  }
  // Render templates
  api.render("./templates")
  // Add env variables
  api.onCreateComplete(() => {
    const envPath = api.resolve(".env");
    const envVars = exists(envPath) ? readEnv(envPath) : {};

    if (envVars["DEV_GRAPHQL_HTTP"]) {
      api.exitLog(`overwrite DEV_GRAPHQL_HTTP ${envPath}`, "info");
    }
    envVars["DEV_GRAPH_HTTP"] = "http://localhost:4466";

    if (!writeFile(envPath, buildEnvContent(envVars))) {
      api.exitLog(`cannot write to ${envPath}`, "error");
      return;
    }

  })
}
