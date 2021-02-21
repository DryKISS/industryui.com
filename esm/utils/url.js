/**
 * Components - Utils - URL
 */
export var historyPush = function historyPush(query) {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      host = _window$location.host,
      pathname = _window$location.pathname;
  var url = "".concat(protocol, "//").concat(host).concat(pathname).concat(query);
  window.history.pushState({
    path: url
  }, '', url);
};
//# sourceMappingURL=url.js.map