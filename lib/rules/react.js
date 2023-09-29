/** eslint-plugin-react-* */
module.exports = {
  "react/button-has-type": 0,
  "react/display-name": 0,
  "react/no-array-index-key": 0,
  "no-console": 0,
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  "react/prop-types": "off",
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
  "react-hooks/exhaustive-deps": [0],
  "react/react-in-jsx-scope": 0,
  "react/jsx-props-no-spreading": 0,
  "react/require-default-props": 0,
  "react/function-component-definition": [
    2,
    {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }
  ],
}