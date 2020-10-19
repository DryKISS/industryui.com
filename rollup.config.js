import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import svg from 'rollup-plugin-svg'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'StyledComponents'
}

const baseConfig = {
  input: path.resolve(__dirname, 'components', 'index.js'),
  plugins: [
    peerDepsExternal({
      includeDependencies: true
    }),
    resolve(),
    svg(),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/
    })
  ]
}

const CommonJS = {
  ...baseConfig,
  output: {
    file: pkg.main,
    format: 'cjs',
    globals,
    sourcemap: true
  }
}

const ESModules = {
  ...baseConfig,
  output: {
    file: pkg.module,
    format: 'es',
    globals,
    sourcemap: true
  }
}

module.exports = [CommonJS, ESModules]
