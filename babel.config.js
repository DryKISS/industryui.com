module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-classes',
    [
      'styled-components', {
        displayName: true,
        ssr: true
      }
    ],
    [
      'module-resolver',
      {
        root: [
          './'
        ],
        alias: {
          api: './api',
          config: './config'
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-syntax-dynamic-import'
      ]
    }
  }
}
