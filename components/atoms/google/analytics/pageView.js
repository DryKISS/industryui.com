/**
 * Google Analytics
 */

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageView = (url, id) => {
  window.gtag('config', id, {
    page_path: url
  })
}

export default pageView
