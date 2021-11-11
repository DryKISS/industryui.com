/**
 * Babel
 *
 * @see https://gist.github.com/ncochard/6cce17272a069fdb4ac92569d85508f4
 */

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-add-react-displayname'
  ],
  env: {
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-react'],
      plugins: ['require-context-hook']
    },
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true
          }
        ]
      ],
      ignore: ['**/__tests__', '**/__mocks__']
    }
  }
}
