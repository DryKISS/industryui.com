module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/components'],
  testMatch: ['<rootDir>/components/*.test.js'],
  setupFiles: ['<rootDir>/.jest/jest.init.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTestAfterEnv.js'],
  transform: {
    '^.+\\.md?$': 'markdown-loader-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@babel/runtime)/).*/', '/dist/'],
}
