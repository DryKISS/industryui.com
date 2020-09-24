/**
 * Rollup configuration
 *
 * @see https://rollupjs.org/guide/en/
 */

// Rollup
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import svg from 'rollup-plugin-svg'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// Utils
import path from 'path'
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
    globals,
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  }
}

const ESModules = {
  ...baseConfig,
  output: {
    globals,
    file: pkg.module,
    format: 'es',
    sourcemap: true
  }
}

module.exports = [CommonJS, ESModules]
