export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    env: {
      es2021: true,
      node: true
    },
    rules: {}
  }
];
