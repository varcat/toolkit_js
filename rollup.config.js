const {babel} = require('@rollup/plugin-babel');
const {nodeResolve} = require('@rollup/plugin-node-resolve');

module.exports = {
  input: './lib/index.js',

  output: {
    file: './bundle.js',
    format: 'iife',
    plugins: [
      nodeResolve({}),
      babel(),
    ],
  },
};
