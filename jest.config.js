/**
 * Jest Configuration
 * https://jest.org
 */
process.env.MOCK_API_PORT = process.env.MOCK_API_PORT || 9999;
module.exports = {
  preset: 'ts-jest',
  globals: {
    "vue-jest": {
      // Disable CSS compilation until it's more stable
      experimentalCSSCompile: false,
    },
    "ts-jest": {
      compiler: "typescript",
      isolatedModules: false,
      diagnostics: true,
    },
    window: true,
    app: true,
  },
  setupFiles: ["<rootDir>/tests/unit/setup.ts", "<rootDir>/tests/unit/store-setup.ts"],
  // globalSetup: "<rootDir>/tests/unit/global-setup.ts",
  // globalTeardown: "<rootDir>/tests/unit/global-teardown.ts",
  setupTestFrameworkScriptFile: "<rootDir>/tests/unit/matchers.ts",
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.spec.(js|jsx|ts|tsx)|**/**/*.spec.(js|jsx|ts|tsx)|**/**/*.unit.(js|jsx|ts|tsx)",
  ],
  testURL:
    process.env.API_BASE_URL ||
    `http://localhost/` ||
    `http://localhost:${process.env.MOCK_API_PORT}`,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,ts,vue}", "!**/node_modules/**", "!src/stories/*.{js,ts}"],
  coverageReporters: ["html", "text-summary"],
};
