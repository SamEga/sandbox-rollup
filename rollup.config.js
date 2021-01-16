import typescript from "rollup-plugin-typescript";
const prettier = require("rollup-plugin-prettier");

export default {
  input: "src/main.ts",
  output: { file: "dist/bundle.js", format: "cjs" },
  plugins: [
    prettier({
      tabWidth: 2,
      singleQuote: false,
    }),
    typescript(),
  ],
};
