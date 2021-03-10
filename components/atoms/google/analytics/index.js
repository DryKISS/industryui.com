/**
 * Google Analytics
 */

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const GoogleAnalyticsPageView = (url, id) => {
  window.gtag('config', id, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const GoogleEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
