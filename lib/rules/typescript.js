/** @typescript-eslint-* */
module.exports = {
  "@typescript-eslint/no-shadow": 0,
  // https://typescript-eslint.io/rules/consistent-type-imports/
  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      "prefer": "type-imports",
      "disallowTypeAnnotations": false
    }
  ],
  // https://typescript-eslint.io/rules/ban-ts-comment/
  "@typescript-eslint/ban-ts-comment": "warn",
  // https://typescript-eslint.io/rules/no-use-before-define/
  "@typescript-eslint/no-use-before-define": ["error"],
  // https://typescript-eslint.io/rules/no-unused-vars/
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      "argsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }
  ],

  // https://typescript-eslint.io/rules/no-explicit-any/
  "@typescript-eslint/no-explicit-any": "error",
  // https://typescript-eslint.io/rules/naming-convention/
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "interface",
      "format": ["PascalCase"],
    },
    {
      "selector": "typeAlias",
      "format": ["PascalCase"],
    },
    {
      "selector": "variable",
      "format": ["PascalCase", "camelCase", "UPPER_CASE"],
      "leadingUnderscore": "allow",
      "filter": {
        "regex": "^_setText$",
        "match": false
      }
    }
  ],
  // https://typescript-eslint.io/rules/ban-types/
  "@typescript-eslint/ban-types": [
    "error",
    {
      "types": {
        // un-ban a type that's banned by default
        "{}": false
      },
      "extendDefaults": true
    }
  ]
}