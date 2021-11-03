// module.exports = {
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:@typescript-eslint/recommended-requiring-type-checking",
//     "plugin:jest/recommended",
//     "plugin:jest/style",
//     "plugin:testing-library/react",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: "./tsconfig.json",
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 13,
//     sourceType: "module",
//   },
//   plugins: ["react", "@typescript-eslint"],
//   rules: {
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//   },
// };

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-floating-promises": "off",
  },
};
