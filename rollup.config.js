import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'components/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    exports: 'named'
  },
  plugins: [
    peerDepsExternal({
      includeDependencies: true
    }),
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/
    })
  ]
}
