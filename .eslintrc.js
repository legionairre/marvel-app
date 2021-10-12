module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  settings: {
    react: {
      version: require("./package.json").devDependencies.react,
    },
  },
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["import", "react"],
  rules: {
    "import/newline-after-import": ["error", { count: 1 }],
    "react/jsx-indent": [2, 2 | 2],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": [1, "always"],
    "array-bracket-spacing": [2, "never"],
    "max-len": [
      2,
      150,
      4,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "operator-linebreak": [2, "after"],
    "consistent-return": 0,
    "prefer-destructuring": [
      2,
      { array: false, object: false },
      { enforceForRenamedProperties: false },
    ],
    "function-paren-newline": 0,
    "no-plusplus": 0,
    "no-param-reassign": 1,
    "no-mixed-operators": 1,
    "no-restricted-syntax": 1,
    "valid-jsdoc": [
      2,
      {
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],
    "react/prop-types": 0,
    "brace-style": 2,
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "eol-last": ["error", "always"],
    "no-duplicate-imports": "error",
    semi: ["error", "always"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var", "function", "directive"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var", "function", "directive"],
        next: ["const", "let", "var", "function", "directive"],
      },
    ],
    "padded-blocks": ["error", { classes: "always" }],
    "lines-between-class-members": ["error", "always"],
    quotes: ["error", "single"],
    eqeqeq: "error",
  },
  overrides: [
    {
      files: "tests/**",
      rules: {
        "no-template-curly-in-string": 1,
      },
    },
  ],
};
