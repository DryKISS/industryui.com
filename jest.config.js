module.exports = {
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/fileMock.js'
  },
  modulePaths: ['node_modules', 'components', '<rootDir>'],
  setupFiles: ['<rootDir>/.jest/jest.init.js', '<rootDir>/.jest/register-context.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTestAfterEnv.js'],
  testMatch: ['**/__tests__/*.test.js'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.md?$': 'markdown-loader-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(@babel/runtime)/).*/']
}
