import { babel } from "@rollup/plugin-babel";
import rollupNodeResolve from "@rollup/plugin-node-resolve";
import rollupCommonjs from "@rollup/plugin-commonjs";
import { terser as rollUpTerser } from "rollup-plugin-terser";
import rollupReplace from "@rollup/plugin-replace";
import ts from "rollup-plugin-typescript2";
import path from "path";

const pkg = require("./package.json");
const name = pkg.name;

// 确保只执行一次ts的检查
let hasTSChecked = false;

const extensions = [".ts", ".js"];

const outputConfigs = {
  "esm-bundler": {
    file: pkg.module,
    format: `es`,
  },
  cjs: {
    file: pkg.main,
    format: `cjs`,
  },
  global: {
    file: pkg.unpkg,
    format: `iife`,
  },
  esm: {
    file: pkg.browser || pkg.module.replace("bundler", "browser"),
    format: `es`,
  },
};

const allFormats = Object.keys(outputConfigs);
const packageFormats = allFormats;
const packageConfigs = packageFormats.map((format) =>
  createConfig(format, outputConfigs[format])
);
packageFormats.forEach((format) => {
  if (format === "cjs") {
    packageConfigs.push(createProductionConfig(format));
  } else if (format === "global") {
    packageConfigs.push(createMinifiedConfig(format));
  }
});

export default packageConfigs;

function createConfig(format, output, plugins = []) {
  const shouldEmitDeclarations = !hasTSChecked;
  const tsPlugin = ts({
    check: !hasTSChecked,
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
    cacheRoot: path.resolve(__dirname, "node_modules/.rts2_cache"),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: true,
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations,
      },
      exclude: ["src/**/*.test.ts"],
    },
  });
  // 确保仅检查一次，同一构建任务ts多次检查有些问题🤔
  hasTSChecked = true;

  const isGlobalBuild = format === "global";

  if (isGlobalBuild) output.name = "toolkit";

  const nodePlugins = [rollupNodeResolve(), rollupCommonjs()];

  return {
    input: path.join(__dirname, "src/index.ts"),
    plugins: [
      tsPlugin,
      ...nodePlugins,
      babel({
        configFile: "./src/babel.config.json",
        babelHelpers: "bundled",
        extensions,
      }),
      ...plugins,
    ],
    output,
  };
}

function createProductionConfig(format) {
  return createConfig(format, {
    file: `dist/${name}.${format}.prod.js`,
    format: outputConfigs[format].format,
  });
}

function createMinifiedConfig(format) {
  return createConfig(
    format,
    {
      file: `dist/${name}.${format}.prod.js`,
      format: outputConfigs[format].format,
    },
    [
      rollUpTerser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true,
        },
      }),
    ]
  );
}
