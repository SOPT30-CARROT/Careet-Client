module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
};
