/**
 * Debounce
 */
export function debounce(callback, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeout = null;
  return function () {
    var _arguments = arguments,
        _this = this;

    var callNow = immediate && !timeout;

    var next = function next() {
      return callback.apply(_this, _arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}
//# sourceMappingURL=index.js.map