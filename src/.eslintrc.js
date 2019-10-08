module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 0, // 允许console.log
    // 'react/jsx-filename-extension': 0, // 允许在非 .jsx 文件中 写 jsx 代码
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx', '.tsx'],
    }],
    'react/prop-types': 0, // 使用 typescript 编写, 不需要 prop-types
    'import/no-unresolved': 0, // 允许 import 时 不带文件后缀名
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
