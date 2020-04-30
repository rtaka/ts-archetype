module.exports = {
  extends: [
    "airbnb-base/legacy",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "jest"
  ],
  env: {
    "jest/globals": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  rules: {
    "import/no-default-export": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}