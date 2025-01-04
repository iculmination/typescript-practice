import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Вимкнути попередження для невикористаних змінних
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Вимкнути попередження для використання any
      "@typescript-eslint/no-explicit-any": "off",

      // Вимкнути попередження для невикористаних функцій
      "no-unused-functions": "off", // Додаткове правило, якщо використовуєш плагін

      // Інші можливі правила, які можуть знадобитися
      "no-console": "off", // Якщо використовуєш console.log
      "no-empty-function": "off", // Для порожніх функцій
    },
  },
];

export default eslintConfig;
