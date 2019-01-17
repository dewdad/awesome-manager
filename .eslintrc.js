module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    // "prettier/prettier": "warn"
    "no-console": "off",
    "no-debugger": "off",
    "no-unreachable": "off",
    "no-empty": "warn",
    "no-trailing-spaces": "warn",
    "vue/not-use-v-if-with-v-for": "off",
    "vue/html-indent": [
      "warn",
      2,
      {
        attribute: 2,
        closeBracket: 1,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/max-attributes-per-line": [
      "warn",
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/no-side-effects-in-computed-properties": "off",
  },
  parserOptions: {
    parser: "typescript-eslint-parser",
  },
};
