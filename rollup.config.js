import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const extensions = [".ts", ".js"];

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/es/index.min.js",
      format: "es",
      plugins: [terser()],
    },
    {
      file: "dist/umd/index.min.js",
      name: "toolkit",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      configFile: "./src/babel.config.json",
      babelHelpers: "runtime",
      extensions,
      exclude: "node_modules/**",
    }),
  ],
};

export default config;
