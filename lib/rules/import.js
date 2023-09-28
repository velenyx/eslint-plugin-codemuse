/** eslint-plugin-import */
module.exports = {
  "overrides": [
    {
      "files": [
        "**/*.stories.js",  // Adjust the glob pattern to match your Storybook files
        "pages/**/*",  // Next.js pages directory
        "app/**/*",  // app directory
        "src/pages/**/*",  // Next.js pages directory
        "src/app/**/*"  // app directory
      ],
      "rules": {
        "import/prefer-default-export": "off",
        "import/no-anonymous-default-export": "off"
      }
    }
  ],
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
  "import/first": "error",
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
  "import/newline-after-import": "error",
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
  "import/no-duplicates": "error",
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
  "import/no-unused-modules": "warn",
}