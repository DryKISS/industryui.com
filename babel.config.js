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
          config: './config',
          data: './data',
          layout: './layouts'
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
