module.exports = {
  preset: "react-native",
  setupFiles: [
    "./jest/setup.js",
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-comunity|@react-navigation)",
  ],
};