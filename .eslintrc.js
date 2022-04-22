module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "eslint-plugin-import", "prettier"],
  env: {
    browser: true
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "react/no-unescaped-entities": "off",
    "no-useless-rename": "off",
    "eslint-comments/disable-enable-pair": "off",
    "react/prop-types": "off",
    "func-names": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    "no-restricted-properties": "off",
    "no-continue": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "vars-on-top": "off",
    "space-before-function-paren": "off",
    camelcase: "off",
    "sitegenesis/no-global-require": "off",
    "no-global-require": "off",
    "import/order": "off",
    "prefer-const": "off",
    "jsx-a11y/no-autofocus": "off",
    "no-var": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^log$|React|models"
      }
    ],
    // duplicate of no-unused-vars
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     vars: 'all',
    //     args: 'none',
    //     ignoreRestSiblings: false,
    //     varsIgnorePattern: '^log$|React|models',
    //   },
    // ],
    "no-unused-vars": ["off"],
    "no-use-before-define": "off",
    "padded-blocks": [1, "never"],
    indent: "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
