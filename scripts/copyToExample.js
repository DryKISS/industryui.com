/**
 * Copy to example
 */
const fse = require('fs-extra')

fse.removeSync('./example/node_modules/@drykiss')
fse.ensureDirSync('./example/node_modules/@drykiss')
fse.ensureDirSync('./example/node_modules/@drykiss/industry-ui')

fse.copySync('./esm', './example/node_modules/@drykiss/industry-ui/esm', { overwrite: true })
fse.copySync('./package.json', './example/node_modules/@drykiss/industry-ui/package.json', {
  overwrite: true
})
