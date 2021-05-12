module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
  plugins: ['@babel/plugin-transform-runtime'],
  overrides: [
    {
      include: ['./node_modules'],
      plugins: [
        [
          'babel-plugin-transform-require-ignore',
          {
            extensions: ['.css']
          }
        ]
      ]
    }
  ]
}
