module.exports = {
  extends: ["discourse"],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    // Custom rules for theme development
    "no-console": "warn",
    "prefer-const": "error"
  }
};