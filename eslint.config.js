import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  { ignores: ["dist/**", "design-references/**"] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.tsx"],
    languageOptions: { globals: globals.browser },
    plugins: reactHooks.configs.flat.recommended.plugins,
    rules: reactHooks.configs.flat.recommended.rules,
  },
  { files: ["src/**/*.ts"], languageOptions: { globals: globals.browser } },
);
