# eslint-plugin-codemuse

A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)

<!-- tocstop -->

### Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
npm i typescript
```

Next, install `eslint-plugin-nimbus-clean`:

```sh
npm install eslint-plugin-codemuse --save-dev
```

Next, install all peerDependencies for this plugin:

```sh
npx install-peerdeps eslint-plugin-codemuse
```

### Usage

Add `codemuse` to the extends or plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "ignorePatterns": [
    "**/*",
    "node_modules"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "fragment": "Fragment",
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  "extends": [
    "plugin:code-muse/recommended"
  ],
  "plugins": [
    "code-muse"
  ]
}
```