import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import autoExternal from 'rollup-plugin-auto-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './index.js',
  output: [
    {
      dir: './dist/index.js',
      format: 'cjs'
    }
  ],
  treeshake: true,
  plugins: [
    autoExternal(),
    postcss(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    image(),
    visualizer(),
    json(),
    terser()
  ]
}
