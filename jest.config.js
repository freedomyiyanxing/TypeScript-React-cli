const path = require('path');
module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest', // 转换器配置 .ts | tsx 转为 ts-jest
  },

  moduleFileExtensions: [ // 模块文件扩展名，当你去引入一个模块并没有指定扩展名的时候，它会依次尝试去添加这些扩展名去找你引入的模块文件。
    'ts',
    'tsx',
    'js',
  ],

  rootDir: path.resolve(__dirname),
  // 指定需要进行单元测试的文件匹配规则
  testMatch: [
    '<rootDir>/test/*.tsx'
  ],
  // 需要忽略的文件匹配规则
  testPathIgnorePatterns: [
    '/node/modules'
  ],
  testURL: 'http://localhost/',
  // 是否收集测试覆盖率，以及覆盖率文件路径
  collectCoverage: true,
  coverageDirectory: './coverage',

  // testEnvironment: 'jsdom', // 测试环境 允许使用浏览的API
  // testRegex: '/test/.*\\.(test|spec)\\.(ts)$', // 表示 test 目录下所有以 .test.ts 和 .spec.ts 的文件都需要跑测试。

  // coverageThreshold: { // 测试覆盖率的阈值设定
  //   global: { // 表示全局的代码分支覆盖率要达到 90%，方法覆盖率要达到 95%，代码行数覆盖率达到 95%，声明覆盖率达到 95%。
  //     branches: 90,
  //     functions: 95,
  //     lines: 95,
  //     statements: 95,
  //   },
  // },
  // collectCoverageFrom: [ // 收集指定文件的测试覆盖率(即使你没为这些文件编写测试)
  //   'src/*.{tsx,js,ts}',
  //   'src/**/*.{tsx,js,ts}',
  //   '!**/node_modules/**',
  // ],
  // setupFilesAfterEnv: [ // 测试框架安装后立即执行的代码文件列表。
  //   '<rootDir>/test/boot.ts',
  // ],
};
