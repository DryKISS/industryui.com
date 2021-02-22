/**
 * Google Analytics
 */
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export var GoogleAnalyticsPageView = function GoogleAnalyticsPageView(url, id) {
  window.gtag('config', id, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

export var GoogleEvent = function GoogleEvent(_ref) {
  var action = _ref.action,
      category = _ref.category,
      label = _ref.label,
      value = _ref.value;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
//# sourceMappingURL=index.js.map