module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          api: './api',
          config: './config',
          decorators: './.storybook/decorators',
          root: './',
          storybook: './.storybook',
          themes: './.storybook/themes'
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ],
        '@babel/preset-react'
      ]
    }
  }
}
