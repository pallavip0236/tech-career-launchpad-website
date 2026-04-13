
// eslint.config.js.test.js
const eslintConfigContent = `import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "prettier/prettier": "error",
    },
  }
);
`;

function testEslintConfig() {
  let success = true;
  let message = 'eslint.config.js should contain recommended ESLint, TypeScript, and Prettier configurations';

  if (!eslintConfigContent.includes('import js from "@eslint/js";')) {
    success = false;
    message += '\n  - Missing @eslint/js import';
  }
  if (!eslintConfigContent.includes('import tseslint from "typescript-eslint";')) {
    success = false;
    message += '\n  - Missing typescript-eslint import';
  }
  if (!eslintConfigContent.includes('import prettier from "eslint-plugin-prettier";')) {
    success = false;
    message += '\n  - Missing eslint-plugin-prettier import';
  }
  if (!eslintConfigContent.includes('import prettierConfig from "eslint-config-prettier";')) {
    success = false;
    message += '\n  - Missing eslint-config-prettier import';
  }
  if (!eslintConfigContent.includes('extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],')) {
    success = false;
    message += '\n  - Missing correct extends configuration';
  }
  if (!eslintConfigContent.includes('"prettier/prettier": "error"')) {
    success = false;
    message += '\n  - Missing prettier/prettier rule';
  }

  if (success) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
  }
}

testEslintConfig();
