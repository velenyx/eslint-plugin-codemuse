/** eslint-plugin-import */
module.exports = {
  "import/extensions": 0,
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
  "import/first": "error",
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
  "import/newline-after-import": "error",
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
  "import/no-duplicates": "error",
  "import/no-cycle": 1,
  "import/no-extraneous-dependencies": 0,
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
  "import/prefer-default-export": "off",
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
  "import/no-anonymous-default-export": [
    "error",
    {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowCallExpression": true,
      "allowLiteral": false,
      "allowObject": true
    }
  ],
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
  "import/no-unassigned-import": "off",
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
  "import/no-unused-modules": 0,
}