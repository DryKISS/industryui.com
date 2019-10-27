module.exports = {
  moduleNameMapper: {
    '\\.(css|jpg|png|scss|svg)$': 'identity-obj-proxy'
  },
  modulePaths: [
    'node_modules',
    'components',
    '<rootDir>'
  ],
  setupFiles: ['<rootDir>/.jest/jest.init.js', '<rootDir>/.jest/register-context.js'],
  testMatch: ['**/__tests__/*.test.js'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.md?$': 'markdown-loader-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(@babel/runtime)/).*/']
}
