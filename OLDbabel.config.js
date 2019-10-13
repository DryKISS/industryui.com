module.exports = function (api) {
  api.cache(true)

  const presets = [
    'next/babel'
  ]

  const plugins = [
    [
      'styled-components', {
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
          config: './config'
        }
      }
    ]
  ]

  const env = {
    test: {
      plugins: ['require-context-hook']
    }
  }

  return {
    presets,
    plugins,
    env
  }
}
