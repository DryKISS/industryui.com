module.exports = {
  presets: ['@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'styled-components',
      {
        displayName: true,
        ssr: true
      }
    ],
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
    build: {
      presets: [
        'next/babel',
        [
          '@babel/env',
          {
            modules: false
          }
        ]
      ]
    },
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
}
