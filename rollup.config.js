import path from 'path'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'
import nodeResolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { name, version } from './package.json'

const PATHS = {
  INPUT: path.resolve(__dirname, 'index.js'),
  DIST: path.resolve(__dirname, 'dist')
}

const banner = `/*
* ${name} v${version}
*/`

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled'
}

function createBaseConfig (callback) {
  const baseConfig = {
    input: PATHS.INPUT,
    plugins: [
      nodeResolve(),
      peerDepsExternal({
        includeDependencies: true
      }),
      commonjs({
        include: /node_modules/
      }),
      postcss(),
      babel({
        exclude: /node_modules/
      }),
      json(),
      image(),
      visualizer()
    ],
    inlineDynamicImports: true
  }

  return callback(baseConfig)
}

const CommonJSConfig = createBaseConfig(function (config) {
  return Object.assign({}, config, {
    output: {
      banner,
      name,
      sourcemap: true,
      format: 'cjs',
      file: path.resolve(PATHS.DIST, 'bundle.common.js')
    }
  })
})

const ESModulesConfig = createBaseConfig(function (config) {
  return Object.assign({}, config, {
    output: {
      banner,
      name,
      sourcemap: true,
      format: 'es',
      file: path.resolve(PATHS.DIST, 'bundle.es.js')
    }
  })
})

const UMDConfig = createBaseConfig(function (config) {
  return Object.assign({}, config, {
    output: {
      banner,
      name,
      sourcemap: true,
      globals: globals,
      format: 'umd',
      file: path.resolve(PATHS.DIST, 'bundle.umd.js')
    }
  })
})

const MinifiedUMDConfig = createBaseConfig(function (config) {
  config.plugins.push(terser())

  return Object.assign({}, config, {
    output: {
      banner,
      name,
      sourcemap: true,
      globals: globals,
      format: 'umd',
      file: path.resolve(PATHS.DIST, 'bundle.umd.min.js')
    }
  })
})

module.exports = [CommonJSConfig, ESModulesConfig, UMDConfig, MinifiedUMDConfig]
