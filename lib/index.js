/**
 * @fileoverview A comprehensive linting solution that sweeps your code clean
 * @author velenyx
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const baseConfig = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic"
  ],
  plugins: [
    "prettier",
    "simple-import-sort",
    "import",
    "react",
    "react-hooks",
    "testing-library",
    "jsx-a11y",
    "promise",
    "unicorn",
    "sonarjs",
    "@typescript-eslint",
    "perfectionist"
  ],
  rules: {
    /** eslint */
    ...require('./rules/common'),

    /** eslint-plugin-prettier */
    ...require('./rules/prettier'),

    /** eslint-plugin-import */
    ...require('./rules/import'),

    /** eslint-plugin-simple-import-sort */
    ...require('./rules/simple-import-sort'),

    /** eslint-plugin-react-* */
    ...require('./rules/react'),

    /** eslint-plugin-promise */
    ...require('./rules/promise'),

    /** eslint-plugin-unicorn */
    ...require('./rules/unicorn'),

    /** eslint-plugin-sonarjs */
    ...require('./rules/sonarjs'),

    /** @typescript-eslint-* */
    ...require('./rules/typescript'),

    /** eslint-plugin-perfectionist */
    ...require('./rules/perfectionist'),
  },
  overrides: [
    {
      files: [
        "**/*.stories.js",
        "**/*.stories.jsx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "pages/**/*",
        "app/**/*",
        "src/pages/**/*",
        "src/app/**/*"
      ],
      rules: {
        "import/prefer-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "import/no-unused-modules": 0,
        "@typescript-eslint/naming-convention": 0
      }
    }
  ],
}

const airbnbConfig = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript"
  ],
  plugins: [
    "import",
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint"
  ],
  rules: {
    // You can override or extend Airbnb rules here if needed
  }
}

module.exports = {
  configs: {
    base: {
      ...baseConfig
    },
    airbnb: {
      ...airbnbConfig
    },
    recommended: {
      extends: [
        "plugin:codemuse/airbnb",
        "plugin:codemuse/base",
      ]
    }
  }
};

