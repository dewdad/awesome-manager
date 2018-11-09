module.exports = {
  globals: {
    "vue-jest": {
      // Disable CSS compilation until it's more stable
      experimentalCSSCompile: false,
    },
  },
  setupFiles: ["<rootDir>/tests/unit/setup.ts"],
  globalSetup: "<rootDir>/tests/unit/global-setup.ts",
  globalTeardown: "<rootDir>/tests/unit/global-teardown.ts",
  setupTestFrameworkScriptFile: "<rootDir>/tests/unit/matchers",
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.spec.(js|jsx|ts|tsx)|**/**/*.spec.(js|jsx|ts|tsx)|**/**/*.unit.(js|jsx|ts|tsx)",
  ],
  testURL: process.env.API_BASE_URL || `http://localhost/`,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,ts,vue}", "!**/node_modules/**", "!src/stories/*.{js,ts}"],
  coverageReporters: ["html", "text-summary"],
};