/**
 * Next Config
 */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
  '@fullcalendar/timegrid'
])

module.exports = withTM({
  future: {
    webpack5: false
  }
})
