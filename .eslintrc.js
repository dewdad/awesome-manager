module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    // "prettier/prettier": "warn"
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-unreachable": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-empty": process.env.NODE_ENV === "production" ? "off" : "error",
    "no-trailing-spaces": process.env.NODE_ENV === "production" ? "error" : "error",
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 2,
        closeBracket: 1,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/no-side-effects-in-computed-properties":
      process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  parserOptions: {
    parser: "typescript-eslint-parser",
  },
};
