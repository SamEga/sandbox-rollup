import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    typescript(),
    prod && terser(),
  ],
};
