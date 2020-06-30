import path from 'path'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'
import nodeResolve from '@rollup/plugin-node-resolve'
import { name, version, dependencies, peerDependencies } from './package.json'

const PATHS = {
  INPUT: path.resolve(__dirname, 'index.js'),
  DIST: path.resolve(__dirname, 'dist')
}

const banner = `/*
* @drykiss/industry-ui v${version}
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
      commonjs({
        include: 'node_modules/**' // Workaround for: https://github.com/rollup/rollup-plugin-commonjs/issues/247
      }),
      postcss(),
      babel({
        exclude: 'node_modules/**'
      }),
      json(),
      image(),
      visualizer()
    ],
    external: Object.keys(Object.assign({}, peerDependencies, dependencies)),
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
      file: path.resolve(PATHS.DIST, `bundle.common.js`)
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
      file: path.resolve(PATHS.DIST, `bundle.es.js`)
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
      file: path.resolve(PATHS.DIST, `bundle.umd.js`)
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
      file: path.resolve(PATHS.DIST, `bundle.umd.min.js`)
    }
  })
})

module.exports = [CommonJSConfig, ESModulesConfig, UMDConfig, MinifiedUMDConfig]
