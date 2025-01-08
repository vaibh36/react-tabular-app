/* eslint-disable no-undef */
module.exports = {
  collectCoverage: true,
  moduleDirectories: ["node_modules"],
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)",
  ],
  testTimeout: 20000,
};