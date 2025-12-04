import { defineConfig } from 'tsup'

// 使用 tsup 作为统一构建工具：
// - 基于 esbuild，构建速度快
// - 同时输出 ESM、CJS、IIFE（三种格式）
// - 自动生成 .d.ts 类型声明
// - 配置清晰，避免繁琐的 Rollup 插件链

export default defineConfig([
  // ESM 构建（对应 package.json 的 `module` 字段：dist/wsp-toolkit.esm-bundler.js）
  {
    entry: { 'wsp-toolkit': 'src/index.ts' },
    format: ['esm'],
    outDir: 'dist',
    clean: true,
    sourcemap: false,
    target: 'es2018',
    // 自定义 ESM 文件后缀以匹配历史命名
    outExtension({ format }) {
      return format === 'esm' ? { js: '.esm-bundler.js' } : { js: '.js' }
    }
  },
  // CJS 与 IIFE 生产构建（对应 `main`/`unpkg` 字段：*.cjs.prod.js / *.global.prod.js）
  {
    entry: { 'wsp-toolkit': 'src/index.ts' },
    format: ['cjs', 'iife'],
    outDir: 'dist',
    clean: false, // 避免覆盖上一个产物
    sourcemap: false,
    target: 'es2018',
    minify: true, // 生产环境压缩
    globalName: 'toolkit', // IIFE 全局变量名，与 Rollup 保持一致
    outExtension({ format }) {
      if (format === 'cjs') return { js: '.cjs.prod.js' }
      if (format === 'iife') return { js: '.global.prod.js' }
      return { js: '.js' }
    }
  }
])
