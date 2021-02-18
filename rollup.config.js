import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";
const prettier = require("rollup-plugin-prettier");

const prod = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: { file: "dist/bundle.js", format: "cjs" },
  plugins: [
    prettier({
      tabWidth: 2,
      singleQuote: false,
    }),
    typescript(),
    prod && terser(),
  ],
};
