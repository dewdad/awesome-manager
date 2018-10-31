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
      devDependencies: {
        "prisma-binding": "^2.1.6",
        "prisma-client-lib": "^1.18.0",
        graphql: "^14.0.0",
        "ts-node": "7.0.1",
      },
      scripts: {
        "prisma:now": "cd lib/prisma && sh config-now.sh && now",
        "prisma:demo": "ts-node --project src/api/prisma/tsconfig.json src/api/prisma/demo.ts",
        "prisma:deploy": "cd lib/prisma && prisma deploy -e ../../.env",
        "prisma:generate": "cd lib/prisma && prisma generate",
      },
    };
    api.extendPackage(pkg);
  } catch (err) {
    console.log(err);
  }
  // Render templates
  api.render("./templates");
  // Add env variables
  api.onCreateComplete(() => {
    const envPath = api.resolve(".env");
    const envVars = exists(envPath) ? readEnv(envPath) : {};

    if (envVars["GRAPHQL_HTTP"]) {
      api.exitLog(`overwrite GRAPHQL_HTTP ${envPath}`, "info");
    }
    envVars["GRAPHQL_HTTP"] = "http://localhost:4466";

    if (envVars["GRAPHQL_WS"]) {
      api.exitLog(`overwrite GRAPHQL_WS ${envPath}`, "info");
    }
    envVars["GRAPHQL_WS"] = "wss://localhost:4466";
    if (!writeFile(envPath, buildEnvContent(envVars))) {
      api.exitLog(`cannot write to ${envPath}`, "error");
      return;
    }
  });
};
