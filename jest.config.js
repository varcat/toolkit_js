// Jest 配置（JS 版本以避免额外 ts-node 依赖）
// 使用 @swc/jest 以极速转换 TS 测试文件
// 匹配 **/*.test.ts / **/*.spec.ts
/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: {
          target: 'ES2018',
          module: 'CommonJS'
        }
      }
    ]
  },
  modulePathIgnorePatterns: ['<rootDir>/dist']
}
