/**
 * Next Config
 */

 const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
  '@fullcalendar/timegrid'
])

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
    future: {
      webpack5: false
    }
  }

module.exports = withPlugins([
   withTM,
    withBundleAnalyzer
  ],
   nextConfig)




// module.exports = withBundleAnalyzer({})
// const withTM = require('next-transpile-modules')([
//   '@fullcalendar/common',
//   '@fullcalendar/daygrid',
//   '@fullcalendar/list',
//   '@fullcalendar/timegrid'
// ])

// module.exports = withTM({
//   future: {
//     webpack5: false
//   }
// })
