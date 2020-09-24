'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dateFns$1 = require('date-fns');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var styled = require('styled-components');
var cloneDeep = require('lodash/cloneDeep');
var React = require('react');
var ReactDOM = require('react-dom');
var reactResizeDetector = require('react-resize-detector');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var bcrypt__default = /*#__PURE__*/_interopDefaultLegacy(bcrypt);
var jwt__default = /*#__PURE__*/_interopDefaultLegacy(jwt);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/**
 * Age calculation from dateTime
 * birthDate: Instance of Date
 */
var age = function age(birthDate) {
  if (!birthDate || !dateFns$1.isValid(birthDate)) {
    return 0;
  }

  return dateFns$1.differenceInYears(new Date(), birthDate);
};

var arrayOfValues = function arrayOfValues(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};

/**
 * Auth utils
 */
var hashPassword = function hashPassword(password) {
  return bcrypt__default['default'].hashSync(password, 10);
};
var validatePassword = function validatePassword(user, password) {
  return bcrypt__default['default'].compareSync(password, user.password);
};
var generateToken = function generateToken(data, config) {
  return jwt__default['default'].sign(data, config.secret, {
    expiresIn: '14d'
  });
};
var validateToken = function validateToken(token, config) {
  return jwt__default['default'].verify(token, config.key, {
    algorithms: ['RS512']
  });
};
var decodeToken = function decodeToken(token) {
  return jwt__default['default'].decode(token);
};
var getUserFromToken = function getUserFromToken(headers, config) {
  if (!headers.Authorization) {
    return null;
  }

  var token = headers.Authorization.split(' ')[1];

  if (!token) {
    return null;
  }

  var decoded = validateToken(token, config);

  if (!decoded || !decoded.user) {
    return null;
  }

  return decoded.user;
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Get average geolocation center
 * @param {Array<Object>} coords
 * coords param example: [{lat: 51.47, lng: -0.0035}, {lat: 52.47, lng: -0.0045}]
 */
var averageGeolocation = function averageGeolocation(coords) {
  if (coords.length === 1) {
    return coords[0];
  }

  var x = 0.0;
  var y = 0.0;
  var z = 0.0;

  var _iterator = _createForOfIteratorHelper(coords),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var coord = _step.value;
      var latitude = coord.lat * Math.PI / 180;
      var longitude = coord.lng * Math.PI / 180;
      x += Math.cos(latitude) * Math.cos(longitude);
      y += Math.cos(latitude) * Math.sin(longitude);
      z += Math.sin(latitude);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var total = coords.length;
  x = x / total;
  y = y / total;
  z = z / total;
  var centralLongitude = Math.atan2(y, x);
  var centralSquareRoot = Math.sqrt(x * x + y * y);
  var centralLatitude = Math.atan2(z, centralSquareRoot);
  return {
    lat: centralLatitude * 180 / Math.PI,
    lng: centralLongitude * 180 / Math.PI
  };
};

/**
 * Utils - Camel Case
 */
var camelCase = function camelCase(string) {
  return capitalize(string.replace(/([A-Z])/g, function (match) {
    return ' ' + match;
  }));
};

/**
 * Capitalise the first letter in a string
 */
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

/**
 * Colour
 */
var blendLinearRgb = function blendLinearRgb(p, c1, c2) {
  var i = parseInt;
  var r = Math.round;
  var P = 1 - p;

  var _c1$split = c1.split(','),
      _c1$split2 = _slicedToArray(_c1$split, 4),
      a = _c1$split2[0],
      b = _c1$split2[1],
      c = _c1$split2[2],
      d = _c1$split2[3];

  var _c2$split = c2.split(','),
      _c2$split2 = _slicedToArray(_c2$split, 4),
      e = _c2$split2[0],
      f = _c2$split2[1],
      g = _c2$split2[2],
      h = _c2$split2[3];

  var x = d || h;
  var j = x ? ',' + (!d ? h : !h ? d : r((parseFloat(d) * P + parseFloat(h) * p) * 1000) / 1000 + ')') : ')';
  return 'rgb' + (x ? 'a(' : '(') + r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + i(e[3] === 'a' ? e.slice(5) : e.slice(4)) * p) + ',' + r(i(b) * P + i(f) * p) + ',' + r(i(c) * P + i(g) * p) + j;
};
var shadeLinearRgb = function shadeLinearRgb(p, c1) {
  var i = parseInt;
  var r = Math.round;

  var _c1$split3 = c1.split(','),
      _c1$split4 = _slicedToArray(_c1$split3, 4),
      a = _c1$split4[0],
      b = _c1$split4[1],
      c = _c1$split4[2],
      d = _c1$split4[3];

  var P = p < 0;
  var t = P ? 0 : 255 * p;
  P = P ? 1 + p : 1 - p;
  return 'rgb' + (d ? 'a(' : '(') + r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + t) + ',' + r(i(b) * P + t) + ',' + r(i(c) * P + t) + (d ? ',' + d : ')');
};

/* eslint no-undef: 0 */

/**
 * Converts an image URL to Data URL (Base64) using Canvas
 */
var convertImgUrlToDataURLviaCanvas = function convertImgUrlToDataURLviaCanvas(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.crossOrigin = '*';

    img.onload = function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.height;
      canvas.width = this.width;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL();
      resolve(dataURL);
      canvas = null;
    };

    img.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };

    img.src = url;
  });
};

/**
 * Format date
 */
var dateFns = function dateFns(string) {
  return dateFns$1.format(new Date(string), 'LLL d, H:mm');
};
var shortDate = function shortDate(string) {
  var date = Date.parse(string);
  return !isNaN(date) ? dateFns$1.format(date, 'MMM d') : string;
};

/**
 * Debounce
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds.
 */
function debounce(callback, wait) {
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

/**
 * Format date
 */
var formatDate = function formatDate(date) {
  return new Date(date.seconds * 1000).toLocaleDateString();
};
var formatIntDate = function formatIntDate(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
  return newDate;
};
var formatIntDateShort = function formatIntDateShort(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    month: 'long',
    day: '2-digit'
  }).format(date);
  return newDate;
};
var formatIntDateYear = function formatIntDateYear(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric'
  }).format(date);
  return newDate;
};
var formatTime = function formatTime(date) {
  var d = new Date(date);
  var hour = '' + d.getHours();
  var minute = '' + d.getMinutes();
  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;
  return "".concat(hour, ":").concat(minute);
};
var formatDateStandard = function formatDateStandard(date) {
  var showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var d = new Date(date);
  var year = d.getFullYear();
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  var formattedDate = [year, month, day].join('-');

  if (showTime) {
    return formattedDate + ' ' + formatTime(date);
  } else {
    return formattedDate;
  }
};
var formatRelativeTime = function formatRelativeTime(date) {
  return moment__default['default'](date).fromNow();
};

/**
 * Format a price (assuming a two-decimal currency like EUR or USD for simplicity).
 */
var formatPrice = function formatPrice(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GBP';
  var numberFormat = new Intl.NumberFormat(['en-GB'], {
    currency: currency,
    currencyDisplay: 'symbol',
    style: 'currency'
  });
  return numberFormat.format(amount);
};

/**
 * Get Acronym of a string - Example: "Java Script Object Notation" -> "JSON"
 */
var getAcronym = function getAcronym(string) {
  var matches = string.match(/\b(\w)/g);
  return matches.join('');
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Get one object from array
 */
var getOne = function getOne(id, array) {
  var selected = array.filter(function (i) {
    return i.id === parseInt(id);
  });
  return selected.length ? _objectSpread({}, selected[0]) : null;
};

/**
 * Gets a parameter from the URL
 */
var getUrlParameter = function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/**
 * Media Query
 *
 * Usage
 * const Container = styled.div`
 *   color: #333;
 *   ${MEDIA_QUERY.desktop`padding: 0 20px;`}
 *   ${MEDIA_QUERY.tablet`padding: 0 10px;`}
 *   ${MEDIA_QUERY.phone`padding: 0 5px;`}
 * `
 */
var sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};
var MEDIA_QUERY = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return styled.css(["@media (min-width:", "em){", "}"], emSize, styled.css.apply(void 0, arguments));
  };

  return accumulator;
}, {});
var MEDIA_QUERY_MAX = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return styled.css(["@media (max-width:", "em){", "}"], emSize, styled.css.apply(void 0, arguments));
  };

  return accumulator;
}, {});

/**
 * Mock helpers
 */

var mergeLocalData = function mergeLocalData(array, key) {
  var identifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var local = JSON.parse(window.localStorage.getItem(key));

  if (local) {
    local.map(function (i) {
      var existing = array.find(function (o) {
        return o[identifier] === parseInt(i[identifier]);
      });

      if (existing) {
        Object.keys(i).map(function (key) {
          existing[key] = i[key];
        });
      } else {
        array.push(i);
      }
    });
  }

  return cloneDeep__default['default'](array);
};
var findByKey = function findByKey(array, key, value) {
  return array.find(function (a) {
    return a[key] === value;
  });
};
var filterByKey = function filterByKey(array, key, value) {
  return array.filter(function (a) {
    return a[key] === value;
  });
};
var filterByString = function filterByString(array, key, string) {
  return array.filter(function (a) {
    return a[key].toLowerCase().includes(string.toLowerCase());
  });
}; // add associated object to an item

var getItemAssociation = function getItemAssociation(item, related, key, foreignKey) {
  return related.find(function (r) {
    return r[key] === item[foreignKey];
  });
}; // add associated array to an item

var getItemAssociations = function getItemAssociations(item, related, key, foreignKey) {
  return related.filter(function (r) {
    return r[key] === item[foreignKey];
  });
}; // add associated array to an array

var getAssociations = function getAssociations(array, related, association, key, foreignKey) {
  return array.map(function (item) {
    item[association] = related.find(function (r) {
      return r[key] === item[foreignKey];
    });
    return item;
  });
}; // add associated array via pivot array

var getManyToManyAssociations = function getManyToManyAssociations(item, pivot, related, key, foreignKey) {
  var associatedItems = pivot.filter(function (a) {
    return a[key] === item.id;
  });
  return associatedItems.map(function (a) {
    return related.find(function (r) {
      return r.id === a[foreignKey];
    });
  });
}; // get first item of an array

var getFirst = function getFirst(array) {
  return array[0];
}; // get last item of an array

var getLast = function getLast(array) {
  return array[array.length - 1];
};

/**
 * random hex color generator
 */
var RandomColor = function RandomColor() {
  return '#' + (Math.random() * 0xffffff << 0).toString(16);
};

/**
 * random key generator
 */
var RandomKey = function RandomKey() {
  return (Math.random() * 0xffffffff << 0).toString(16);
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var __jsx = React__default['default'].createElement;
var ReactHolderJs = function ReactHolderJs(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      usePlaceholder = _ref.usePlaceholder;
  React.useEffect(function () {
    init();
  }, [src, usePlaceholder]);
  var placeholderRef = React.useRef();

  var init = function init() {
    if (!(typeof window !== 'undefined' && window.document)) {
      return;
    }

    if (!usePlaceholder) {
      return;
    }

    var node = ReactDOM__default['default'].findDOMNode(placeholderRef.current); // require in here to prevent errors during server-side rendering

    var Holder = require('holderjs');

    Holder.run({
      domain: 'holder.js',
      images: node,
      object: null,
      bgnodes: null,
      stylenodes: null
    });
  };

  if (usePlaceholder) {
    var _src = "holder.js/".concat(width, "x").concat(height);

    return __jsx("img", {
      src: _src,
      ref: placeholderRef,
      "data-src": _src
    });
  } else {
    return __jsx("img", {
      src: src
    });
  }
};
ReactHolderJs.propTypes = {
  placeholder: propTypes.object,
  src: propTypes.string.isRequired,
  usePlaceholder: propTypes.bool
};
ReactHolderJs.defaultProps = {
  placeholder: {
    auto: true,
    theme: 'vine'
  },
  usePlaceholder: false
};

var __jsx$1 = React__default['default'].createElement;

var ResizeDetector = reactResizeDetector.withResizeDetector( /*#__PURE__*/React.memo(function (_ref) {
  var height = _ref.height,
      width = _ref.width,
      onResize = _ref.onResize;
  // clearTimeout(timer)
  // timer = setTimeout(() => {onResize()}, 0)
  requestAnimationFrame(function () {
    return onResize({
      height: height,
      width: width
    });
  });
  return __jsx$1("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  });
}, function (_ref2, _ref3) {
  var prevWidth = _ref2.width;
  var nextWidth = _ref3.width;
  return prevWidth === nextWidth;
}));

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function requestSimulator() {
  return _requestSimulator.apply(this, arguments);
}

function _requestSimulator() {
  _requestSimulator = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var responseType,
        timeout,
        _args = arguments;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            responseType = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'success';
            timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1000;
            _context.next = 4;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                if (responseType === 'success') resolve({
                  message: 'Success!'
                });else {
                  reject(new Error('Register failed!'));
                }
              }, timeout);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestSimulator.apply(this, arguments);
}

/**
 * Slugify a string
 */
var slugify = function slugify(string) {
  var replacer = '-';
  var slug = string.toString().toLowerCase().trim().normalize('NFKD') // Normalization Form Compatibility Decomposition
  .replace(/\s+/g, replacer) // Replace spaces replacer
  .replace(/[^\w-]+/g, '') // Remove all non-word chars
  .replace(/--+/g, replacer) // Replace multiple spaces with replacer
  .replace(new RegExp(replacer + '$'), ''); // Replace the replacer in the last occurence

  return slug;
};

/**
 * Truncate
 * Truncate the text to a single line
 */
var Truncate = function Truncate() {
  return "\n  display: inline-block;\n  line-height: initial;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  word-break: break-all;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  ";
}; // TODO: This will be deprecated when we manage it directly in JS.

var TruncateByMaxHeight = function TruncateByMaxHeight(maxHeight) {
  return "\n    display: inline-block;\n    line-height: 1.4;\n    overflow: hidden;\n    white-space: wrap;\n    max-height: ".concat(maxHeight, ";\n    width: 100%;\n\n  ");
};

/**
 * Validator: Post Code - UK
 */
var validatorPostCode = function validatorPostCode(postCode) {
  var regExp = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/;
  return regExp.test(postCode);
}; // Return area and district from Post Code

var parsePostCode = function parsePostCode(postCode) {
  var parsed = (postCode === null || postCode === void 0 ? void 0 : postCode.match(/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i)) || '';
  return {
    area: parsed[1],
    district: parsed[2]
  };
};

/**
 * Validator: Uri
 */
var validatorUri = function validatorUri(uri) {
  var regExp = /^((mailto|tel|http|https|ftp):)/;
  return regExp.test(uri);
};

/**
 * Validator: UUID4
 */
var validatorUuid4 = function validatorUuid4(uuid) {
  var regExp = /^[a-z0-9-]{36}$/gi;
  return regExp.test(uuid);
};

var historyPush = function historyPush(query) {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      host = _window$location.host,
      pathname = _window$location.pathname;
  var url = "".concat(protocol, "//").concat(host).concat(pathname).concat(query);
  window.history.pushState({
    path: url
  }, '', url);
};

/**
 * Viewport width
 */
var viewPort = function viewPort(source) {
  if (source && source.clientWidth) {
    return source.clientWidth;
  }

  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }

  return null;
};

/**
 * Theme - Variables - Colour
 */
var ALIGN = {
  Start: 'flex-start',
  End: 'flex-end',
  Center: 'center',
  'Space Between': 'space-between',
  'Space Around': 'space-around',
  Initial: 'initial',
  Inherit: 'inherit'
};

/**
 * Context
 * Provides a list of the accepted colours
 */
var CONTEXT = {
  DARKGREY: 'darkGrey',
  WHITE: 'white',
  BLACK: 'black',
  DARK: 'dark',
  LIGHT: 'light',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
  HELP: 'help',
  MALE: 'male',
  FEMALE: 'female',
  TRANSPARENT: 'transparent'
};

/**
 * Size
 * Provides a list of the accepted sizes
 */
var SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
  XXXL: 'xxxl'
};

var Position = {
  Bottom: 'bottom',
  Top: 'top',
  Right: 'right',
  Left: 'left'
};

var sizeArray = function () {
  var array = [];

  for (var key in SIZE) {
    array.push(SIZE[key]);
  }

  return array;
}();

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .Form-feedback {\n    width: 100%;\n    margin-top: .25rem;\n    font-size: 80%;\n    color: #dc3545;\n  }\n\n  .Form-validated .Form-control:valid~.Form-feedback {\n    display: none;\n  }\n\n  .Form-validated .Form-control:invalid {\n    border-color: #dc3545;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .text-right {\n    text-align: right;\n  }\n\n  .text-white {\n    color: #fff;\n  }\n\n  .float-left {\n    float: left;\n  }\n\n  .float-right {\n    float: right;\n  }\n\n  .d-none {\n    display: none;\n  }\n\n  .d-md-block {\n    ", "\n  }\n\n  #iubenda_policy .iub_content {\n    padding: 0 !important;\n  }\n\n  #iubenda_policy.iubenda_fluid_policy .iub_container {\n    margin: 0 !important;\n  }\n\n  /* Normalise */\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    color: ", ";\n    font-family: ", ";\n    margin: 0;\n    position: relative;\n  }\n\n  .fc-event {\n    cursor: pointer;\n  }\n\n  pre {\n    font-family: monospace;\n    font-size: 1em;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  input {\n    overflow: visible;\n  }\n\n  select {\n    text-transform: none;\n  }\n\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  fieldset {\n    border: 0;\n    margin-bottom: 1rem;\n    padding: 0.5rem 0 0;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type=\"search\"] {\n    outline-offset: -2px;\n  }\n\n  ::-webkit-file-upload-button {\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none;\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ThemeStyle = styled.createGlobalStyle(_templateObject(), MEDIA_QUERY.desktop(_templateObject2()), function (props) {
  return props.theme.TYPOGRAPHY.fontColour;
}, function (props) {
  return props.theme.TYPOGRAPHY.font;
});

/**
 * Background colour
 */
var BACKGROUND = function BACKGROUND(_ref) {
  var context = _ref.context,
      outline = _ref.outline,
      theme = _ref.theme;
  return "background-color: ".concat(outline && 'transparent' || context && theme.COLOUR[context] || theme.COLOUR.dark, ";");
};

/**
 * Colour
 */
var COLOUR = function COLOUR(_ref) {
  var context = _ref.context,
      outline = _ref.outline,
      theme = _ref.theme;
  return "color: ".concat(outline && theme.COLOUR[context] || context === 'light' && theme.COLOUR.dark || context === 'white' && theme.COLOUR.primary || context && theme.COLOUR[context] || theme.COLOUR[context], ";");
};

/**
 * Theme - Variables - COLOUR
 */
var COLOUR$1 = {
  active: 'rgb(204 ,0, 0)',
  black: 'rgb(0, 0, 0)',
  blackText: 'rgb(102, 102, 102)',
  danger: 'rgb(255, 88, 88)',
  dark: 'rgb(92, 111, 127)',
  darkGrey: 'rgb(204, 204, 204)',
  drykiss_lightBlue: 'rgb(0, 225, 218)',
  drykiss_darkPink: 'rgb(255, 0, 99)',
  error: 'rgb(255, 45, 45)',
  fadeBlue: 'rgba(36, 94, 229, 0.3)',
  fadeRed: 'rgba(255, 45, 45, 0.25)',
  female: 'rgb(248, 139, 157)',
  grey: 'rgb(235, 235, 235)',
  grey80: 'rgb(204, 204, 204)',
  gold40: 'rgb(250, 207, 56)',
  help: 'rgb(255, 203, 68)',
  info: 'rgb(148, 148, 126)',
  light: 'rgb(236, 240, 243)',
  lightBlue: 'rgb(173, 195, 245)',
  lightRed: 'rgb(255, 151, 151)',
  male: 'rgb(142, 206, 253)',
  primary: 'rgb(0, 71, 255)',
  secondary: 'rgb(6, 121, 216)',
  success: 'rgb(54, 197, 58)',
  formSuccess: 'rgb(69, 186, 190)',
  transparent: 'transparent',
  darkText: '#666666',
  visited: 'rgb(180, 14, 180)',
  warning: 'rgb(222, 127, 40)',
  white: 'rgb(255, 255, 255)'
};

/**
 * Theme - Utils - Colour List
 */
var colourList = function () {
  var list = [];

  for (var key in COLOUR$1) {
    list.push({
      colour: COLOUR$1[key],
      id: RandomKey()
    });
  }

  return list;
}();

var DIMENSION = function DIMENSION(_ref) {
  var h100 = _ref.h100,
      w100 = _ref.w100,
      h100vh = _ref.h100vh,
      w100vw = _ref.w100vw;
  var temp = '';
  if (h100) temp += 'height: 100% !important;';
  if (w100) temp += 'width: 100% !important;';
  if (h100vh) temp += 'height: 100vh !important;';
  if (w100vw) temp += 'width: 100vw !important;';
  return temp;
};
var DIMENSION_PROP_TYPES = {
  h100: propTypes.bool,
  w100: propTypes.bool,
  h100vh: propTypes.bool,
  w100vw: propTypes.bool
};

var DISPLAY = function DISPLAY(_ref) {
  var dBlock = _ref.dBlock,
      dFlex = _ref.dFlex,
      dInline = _ref.dInline,
      dInlineBlock = _ref.dInlineBlock,
      dInlineFlex = _ref.dInlineFlex,
      dNone = _ref.dNone;
  var display = null;
  if (dBlock) display = 'block';
  if (dFlex) display = 'flex';
  if (dInline) display = 'inline';
  if (dInlineBlock) display = 'inline-block';
  if (dInlineFlex) display = 'inline-flex';
  if (dNone) display = 'none';
  return display ? "display: ".concat(display, " !important;") : '';
};
var DISPLAY_PROP_TYPES = {
  dBlock: propTypes.bool,
  dFlex: propTypes.bool,
  dInline: propTypes.bool,
  dInlineBlock: propTypes.bool,
  dInlineFlex: propTypes.bool,
  dNone: propTypes.bool
};

/**
 * Theme - Font Size
 */
var FONTSIZE = function FONTSIZE(_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  var fontSize = size && Object.values(SIZE).indexOf(size);
  return "font-size: ".concat(fontSize > -1 ? theme.TYPOGRAPHY.fontSizes[fontSize] + 'px' : theme.TYPOGRAPHY.fontSizeBase, ";");
};

var ERROR_STYLE = function ERROR_STYLE(_ref) {
  var theme = _ref.theme,
      isTyping = _ref.isTyping,
      withAddon = _ref.withAddon;
  return styled.css(["border-color:", ";border-image:initial;border-style:solid;border-left-width:", ";&:hover{border-color:", ";}&:focus{border-color:", ";}", ""], theme.COLOUR.danger, !withAddon && '0.25rem', !isTyping && theme.COLOUR.lightRed, theme.COLOUR.error, isTyping === true && styled.css(["box-shadow:0px 0px 4px ", ";"], theme.COLOUR.fadeRed));
};
var COMMON_INPUT_STYLES = function COMMON_INPUT_STYLES(_ref2) {
  var disabled = _ref2.disabled,
      errors = _ref2.errors,
      isTyping = _ref2.isTyping,
      readOnly = _ref2.readOnly,
      Required = _ref2.Required,
      theme = _ref2.theme;
  return styled.css(["background-clip:padding-box;background-color:", ";border:1px solid ", ";border-radius:", ";box-sizing:border-box;color:", ";display:block;font-size:0.75rem;", " ", " outline:none;padding:0 0.725rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;width:100%;&:hover{border-color:", ";}&:focus{border-color:", ";}::placeholder{color:", ";opacity:1;}", " ", ""], theme.COLOUR.white, theme.COLOUR.grey80, theme.FORM_ELEMENTS_STYLES.inputBorderRadius, theme.COLOUR.blackText, Required && styled.css(["border-right-width:0.25rem;"]), isTyping === true && styled.css(["box-shadow:0px 0px 4px ", ";"], theme.COLOUR.fadeBlue), !disabled && !readOnly && theme.COLOUR.lightBlue, function () {
    if (!readOnly) {
      return errors ? theme.COLOUR.error : theme.COLOUR.primary;
    } else {
      return theme ? theme.COLOUR.darkGrey : '#CCCCCC';
    }
  }(), theme ? theme.COLOUR.grey80 : '#cccccc', disabled && styled.css(["background:", ";cursor:not-allowed;border-color:", ";"], theme.COLOUR.grey, function (_ref3) {
    var theme = _ref3.theme;
    return theme ? theme.COLOUR.darkGrey : '#cccccc';
  }), readOnly && styled.css(["background-color:transparent;border-color:", ";border-width:1px;padding:0.5rem;"], function (_ref4) {
    var theme = _ref4.theme;
    return theme ? theme.COLOUR.darkGrey : '#cccccc';
  }));
};

var SPACER_FORMULA = function SPACER_FORMULA(factor) {
  return factor * 4;
};
var SPACING = function SPACING() {
  var amount = 4;

  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (output, n) {
    return "".concat(output).concat(n * amount).concat(n > 0 ? 'px' : '', " ");
  }, '');
};
var SPACER = function SPACER(_ref) {
  var m = _ref.m,
      m0 = _ref.m0,
      mx = _ref.mx,
      my = _ref.my,
      mt = _ref.mt,
      mb = _ref.mb,
      mr = _ref.mr,
      ml = _ref.ml,
      mAuto = _ref.mAuto,
      p = _ref.p,
      p0 = _ref.p0,
      px = _ref.px,
      py = _ref.py,
      pt = _ref.pt,
      pb = _ref.pb,
      pr = _ref.pr,
      pl = _ref.pl;
  var temp = '';
  if (m) temp += "margin: ".concat(SPACER_FORMULA(m), "px !important;");
  if (m0) temp += 'margin: 0 !important;';
  if (mx) temp += "margin: 0 ".concat(SPACER_FORMULA(mx), "px !important;");
  if (my) temp += "margin: ".concat(SPACER_FORMULA(my), "px 0 !important;");
  if (mt) temp += "margin-top: ".concat(SPACER_FORMULA(mt), "px !important;");
  if (mb) temp += "margin-bottom: ".concat(SPACER_FORMULA(mb), "px !important;");
  if (mr) temp += "margin-right: ".concat(SPACER_FORMULA(mr), "px !important;");
  if (ml) temp += "margin-left: ".concat(SPACER_FORMULA(ml), "px !important;");
  if (mAuto) temp += 'margin: auto !important;';
  if (p) temp += "padding: ".concat(SPACER_FORMULA(p), "px !important;");
  if (p0) temp += 'padding: 0 !important;';
  if (px) temp += "padding: 0 ".concat(SPACER_FORMULA(px), "px !important;");
  if (py) temp += "padding: ".concat(SPACER_FORMULA(py), "px 0 !important;");
  if (pt) temp += "padding-top: ".concat(SPACER_FORMULA(pt), "px !important;");
  if (pb) temp += "padding-bottom: ".concat(SPACER_FORMULA(pb), "px !important;");
  if (pr) temp += "padding-right: ".concat(SPACER_FORMULA(pr), "px !important;");
  if (pl) temp += "padding-left: ".concat(SPACER_FORMULA(pl), "px !important;");
  return temp;
};
var SPACER_PROP_TYPES = {
  m: propTypes.number,
  m0: propTypes.bool,
  mx: propTypes.number,
  my: propTypes.number,
  mt: propTypes.number,
  mb: propTypes.number,
  mr: propTypes.number,
  ml: propTypes.number,
  mAuto: propTypes.bool,
  p: propTypes.number,
  p0: propTypes.bool,
  px: propTypes.number,
  py: propTypes.number,
  pt: propTypes.number,
  pb: propTypes.number,
  pr: propTypes.number,
  pl: propTypes.number
};

/**
 * Theme - Variables - Typography
 */
var fontSizeBase = '1rem;';
var fontSizeLg = '($fontSizeBase * 1.25);';
var fontSizeSm = '($fontSizeBase * .875);';
var fonts = {
  monospace: 'monospace',
  sans: '"Muli", sans-serif'
};
var font = fonts.sans;
var fontColour = '#6b7a87';
var monospace = fonts.monospace;
var fontFamilies = fonts;
var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];
var TYPOGRAPHY = {
  fontSizeBase: fontSizeBase,
  fontSizeLg: fontSizeLg,
  fontSizeSm: fontSizeSm,
  font: font,
  fontColour: fontColour,
  fontFamilies: fontFamilies,
  fontSizes: fontSizes,
  monospace: monospace
};

/**
 * Avatar - Variables
 */
var AVATAR = {
  background: COLOUR$1.primary,
  colour: COLOUR$1.black
};

/**
 * BarChart - Variables
 */
var legendTranslateX = 110;
var BARCHART = {
  colors: COLOUR$1,
  margin: function margin() {
    return {
      top: 50,
      right: this.showLegend ? 125 : 125 - legendTranslateX,
      // boolean passed as prop
      bottom: 50,
      left: 80
    };
  },
  padding: 0.2,
  borderWidth: 1,
  borderColor: COLOUR$1.black,
  labelSkipHeight: 24,
  enableLabel: true,
  animate: false,
  isInteractive: false,
  enableGridX: false,
  enableGridY: true,
  axisBottom: function axisBottom() {
    return {
      tickSize: 10,
      tickPadding: 10,
      tickRotation: -1,
      legend: this.bottomLegend,
      // string passed as prop
      legendPosition: 'middle',
      legendOffset: 36
    };
  },
  axisLeft: function axisLeft() {
    return {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend,
      // string passed as prop
      legendPosition: 'middle',
      legendOffset: -60
    };
  },
  legends: [{
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: legendTranslateX,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [{
      on: 'hover',
      style: {
        itemOpacity: 1
      }
    }]
  }]
};

/**
 * Full Calendar - Variables
 */
var CALENDAR = {
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  }
};

/**
 * Theme - Variables - Copyright
 */
var COPYRIGHT = {
  background: COLOUR$1.white,
  colour: COLOUR$1.black
};

/**
 * Footer - Variables
 */
var FOOTER = {
  background: COLOUR$1.white,
  colour: COLOUR$1.black
};

var FORM_ELEMENTS_STYLES = {
  inputBorderRadius: '.25rem'
};

/**
 * Theme - Variables - Grid
 */
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200
};
var containerWidths = {
  sm: 576,
  md: 768,
  lg: 1008,
  xl: 1152
};
var gridColumns = 12;
var gutterWidth = 32;
var defaultScreenClass = 'sm';
var space = [0, 4, 8, 16, 32, 64, 128];
var radius = 4;
var GRID = {
  breakpoints: breakpoints,
  containerWidths: containerWidths,
  defaultScreenClass: defaultScreenClass,
  gutterWidth: gutterWidth,
  gridColumns: gridColumns,
  radius: radius,
  space: space
};

/**
 * Theme - Variables - Headings
 */
var HEADINGS = {
  h1: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '2rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h2: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.5rem',
    lineHeight: '1.3333',
    textTransform: 'initial'
  },
  h3: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.25rem',
    lineHeight: '1.4',
    textTransform: 'initial'
  },
  h4: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1rem',
    lineHeight: '1.5',
    textTransform: 'initial'
  },
  h5: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '0.85rem',
    lineHeight: '1.429',
    textTransform: 'initial'
  },
  h6: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '0.85rem',
    letterSpacing: '2px',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  }
};

/**
 * Charts - Line - Variables
 */
var lastValue = null;
var LINECHART = {
  axisBottom: function axisBottom() {
    var _this = this;

    return {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.bottomLegend,
      // string passed as prop
      legendOffset: 36,
      legendPosition: 'middle',
      format: function format(value) {
        if (_this.axisBottomDistinct) {
          var formatted = shortDate(value);

          if (formatted !== lastValue) {
            lastValue = formatted;
            return formatted;
          }
        } else return value;
      }
    };
  },
  axisLeft: function axisLeft() {
    var _this2 = this;

    return {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend,
      // string passed as prop
      legendOffset: -50,
      legendPosition: 'middle',
      format: function format(value) {
        if (value % 1 === 0) return "".concat(value + _this2.axisLeftSymbol || value);
      }
    };
  },
  axisTop: null,
  axisRight: null,
  margin: function margin() {
    return {
      top: 30,
      right: this.showLegend ? 110 : 30,
      // props context
      bottom: 50,
      left: 60
    };
  },
  legends: [{
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 100,
    translateY: 0,
    itemsSpacing: 0,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)',
    effects: [{
      on: 'hover',
      style: {
        itemBackground: 'rgba(0, 0, 0, .03)',
        itemOpacity: 1
      }
    }]
  }],
  pointColor: COLOUR$1.white,
  pointSize: 10,
  pointBorderColor: {
    from: 'serieColor'
  },
  pointBorderWidth: 2,
  pointLabel: 'y',
  pointLabelYOffset: -12,
  useMesh: true,
  xScale: {
    type: 'point'
  },
  yScale: function yScale() {
    return {
      type: 'linear',
      stacked: !!this.stacked,
      // props context
      min: 'auto',
      max: 'auto'
    };
  }
};

/**
 * Theme - Variables - Link
 */
var LINK = {
  colour: COLOUR$1.primary
};

/**
 * Navbar - Variables
 */
var NAVBAR = {
  // Navbar
  background: COLOUR$1.white,
  colourActive: COLOUR$1.dark,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',
  // Borders
  borderTopColor: COLOUR$1.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',
  // Overlay
  backgroundOverlay: COLOUR$1.white,
  heightOverlay: '100%',
  positionOverlay: 'fixed',
  widthOverlay: '100%',
  // Toggler
  colourToggler: COLOUR$1.dark,
  fontSizeToggler: '0.875',
  paddingToggler: '1.25rem 0 1.25rem 1rem',
  colourHoverToggler: COLOUR$1.primary,
  // Collapse
  positionCollapse: 'static',
  // Link
  paddingLink: '1rem 0.75rem',
  colourDefault: COLOUR$1.dark,
  colourHover: COLOUR$1.primary,
  colourDefaultDesktop: COLOUR$1.dark,
  colourHoverDesktop: COLOUR$1.primary,
  // List
  fontSizeList: '0.875rem',
  // ListItem
  borderTopListItem: '1px solid #33475b',
  backgroundListItem: 'transparent',
  backgroundHoverListItem: COLOUR$1.light,
  borderBottomHoverListItem: 'none',
  justifyContentDesktopListItem: 'center',
  marginBottomDesktopListItem: 'inherit'
};

/**
 * Theme - Variables - Page
 */
var PAGE = {
  backGroundColour: 'rgb(245, 248, 250)'
};

/**
 * PieChart - Variables
 */
var PIECHART = {
  animate: true,
  borderColor: {
    from: 'color',
    modifiers: [['darker', 0.2]]
  },
  borderWidth: 1,
  cornerRadius: 3,
  padAngle: 0.7,
  innerRadius: 0.5,
  startAngle: -180,
  margin: function margin() {
    return {
      top: 30,
      right: 80,
      bottom: this.showLegend ? 80 : 30,
      // props context
      left: 80
    };
  },
  radialLabelsSkipAngle: 10,
  radialLabelsTextXOffset: 6,
  radialLabelsTextColor: COLOUR$1.black,
  radialLabelsLinkOffset: 0,
  radialLabelsLinkDiagonalLength: 16,
  radialLabelsLinkHorizontalLength: 24,
  radialLabelsLinkStrokeWidth: 1,
  radialLabelsLinkColor: {
    from: 'color'
  },
  slicesLabelsSkipAngle: 10,
  slicesLabelsTextColor: COLOUR$1.black,
  legends: [{
    anchor: 'bottom',
    direction: 'row',
    translateY: 56,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: '#999',
    symbolSize: 18,
    symbolShape: 'circle',
    effects: [{
      on: 'hover',
      style: {
        itemTextColor: '#000'
      }
    }]
  }],
  motionStiffness: 90,
  motionDamping: 15
};

// UI
var PROGRESS = {
  bgColor: COLOUR$1.light,
  borderRadius: '.25rem',
  fontSize: {
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },
  height: {
    xs: '.15rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
};
var PROGRESSBAR = {
  bgImage: "\n  linear-gradient(\n    45deg,\n    rgba(255,255,255,.15) 25%,\n    transparent 25%,\n    transparent 50%,\n    rgba(255,255,255,.15) 50%,\n    rgba(255,255,255,.15) 75%,\n    transparent 75%,\n    transparent\n    )\n    ",
  bgSize: '1rem 1rem',
  context: 'primary',
  role: 'progressbar',
  transition: 'width .6s ease'
};

/**
 * Theme - Variables - Sidebar
 */
var SIDEBAR = {
  background: '#003753',
  highlight: COLOUR$1.primary,
  linkColour: COLOUR$1.light,
  linkHover: 'rgba(0, 0, 0, 0.75)'
};

/**
 * Theme - Variables - Stepper
 */
var STEPPER = {
  colour: COLOUR$1.primary,
  colourCheckmark: COLOUR$1.success
};

/**
 * Table - Variables
 */
var TABLE = {
  fontSize: '0.875rem',
  padding: '0.5rem'
};

/**
 * Theme - Variables - Tabs
 */
var TABS = {
  activeColour: COLOUR$1.white,
  borderColour: '#dee2e6',
  borderRadius: '.1rem',
  colour: COLOUR$1.light,
  disabledColour: '#eee',
  hoverColour: '#dee2e6'
};

/**
 * Theme - Variables
 */
var Theme = {
  AVATAR: AVATAR,
  BARCHART: BARCHART,
  CALENDAR: CALENDAR,
  COLOUR: COLOUR$1,
  COPYRIGHT: COPYRIGHT,
  FOOTER: FOOTER,
  FORM_ELEMENTS_STYLES: FORM_ELEMENTS_STYLES,
  GRID: GRID,
  HEADINGS: HEADINGS,
  LINECHART: LINECHART,
  LINK: LINK,
  NAVBAR: NAVBAR,
  PAGE: PAGE,
  PIECHART: PIECHART,
  PROGRESS: PROGRESS,
  PROGRESSBAR: PROGRESSBAR,
  SIDEBAR: SIDEBAR,
  SPACING: SPACING,
  STEPPER: STEPPER,
  TABLE: TABLE,
  TABS: TABS,
  TYPOGRAPHY: TYPOGRAPHY
};

var __jsx$2 = React__default['default'].createElement;
var Blockquote = function Blockquote(_ref) {
  var footer = _ref.footer,
      text = _ref.text;
  return __jsx$2(StyledBlockquote, null, __jsx$2(StyledText, null, text), footer && __jsx$2(StyledFooter, null, footer));
};
var StyledBlockquote = styled__default['default'].blockquote.withConfig({
  displayName: "blockquote__StyledBlockquote",
  componentId: "sc-1l9ajin-0"
})(["border-left:5px solid rgba(240,0,0,0.5);margin:1rem 0;padding:10px 20px;"]);
var StyledText = styled__default['default'].h1.withConfig({
  displayName: "blockquote__StyledText",
  componentId: "sc-1l9ajin-1"
})(["color:#000;font-size:2rem;font-weight:normal;margin:0;"]);
var StyledFooter = styled__default['default'].footer.withConfig({
  displayName: "blockquote__StyledFooter",
  componentId: "sc-1l9ajin-2"
})(["font-size:1rem;&::before{content:'\\2014 \\A0';}"]);
Blockquote.propTypes = {
  footer: propTypes.string,
  text: propTypes.string.isRequired
};

exports.ALIGN = ALIGN;
exports.BACKGROUND = BACKGROUND;
exports.Blockquote = Blockquote;
exports.COLOUR = COLOUR;
exports.COMMON_INPUT_STYLES = COMMON_INPUT_STYLES;
exports.CONTEXT = CONTEXT;
exports.DIMENSION = DIMENSION;
exports.DIMENSION_PROP_TYPES = DIMENSION_PROP_TYPES;
exports.DISPLAY = DISPLAY;
exports.DISPLAY_PROP_TYPES = DISPLAY_PROP_TYPES;
exports.ERROR_STYLE = ERROR_STYLE;
exports.FONTSIZE = FONTSIZE;
exports.MEDIA_QUERY = MEDIA_QUERY;
exports.MEDIA_QUERY_MAX = MEDIA_QUERY_MAX;
exports.Position = Position;
exports.RandomColor = RandomColor;
exports.RandomKey = RandomKey;
exports.ReactHolderJs = ReactHolderJs;
exports.ResizeDetector = ResizeDetector;
exports.SIZE = SIZE;
exports.SPACER = SPACER;
exports.SPACER_FORMULA = SPACER_FORMULA;
exports.SPACER_PROP_TYPES = SPACER_PROP_TYPES;
exports.SPACING = SPACING;
exports.Theme = Theme;
exports.ThemeStyle = ThemeStyle;
exports.Truncate = Truncate;
exports.TruncateByMaxHeight = TruncateByMaxHeight;
exports.age = age;
exports.arrayOfValues = arrayOfValues;
exports.averageGeolocation = averageGeolocation;
exports.blendLinearRgb = blendLinearRgb;
exports.camelCase = camelCase;
exports.capitalize = capitalize;
exports.colourList = colourList;
exports.convertImgUrlToDataURLviaCanvas = convertImgUrlToDataURLviaCanvas;
exports.dateFns = dateFns;
exports.debounce = debounce;
exports.decodeToken = decodeToken;
exports.filterByKey = filterByKey;
exports.filterByString = filterByString;
exports.findByKey = findByKey;
exports.formatDate = formatDate;
exports.formatDateStandard = formatDateStandard;
exports.formatIntDate = formatIntDate;
exports.formatIntDateShort = formatIntDateShort;
exports.formatIntDateYear = formatIntDateYear;
exports.formatPrice = formatPrice;
exports.formatRelativeTime = formatRelativeTime;
exports.formatTime = formatTime;
exports.generateToken = generateToken;
exports.getAcronym = getAcronym;
exports.getAssociations = getAssociations;
exports.getFirst = getFirst;
exports.getItemAssociation = getItemAssociation;
exports.getItemAssociations = getItemAssociations;
exports.getLast = getLast;
exports.getManyToManyAssociations = getManyToManyAssociations;
exports.getOne = getOne;
exports.getUrlParameter = getUrlParameter;
exports.getUserFromToken = getUserFromToken;
exports.hashPassword = hashPassword;
exports.historyPush = historyPush;
exports.mergeLocalData = mergeLocalData;
exports.parsePostCode = parsePostCode;
exports.requestSimulator = requestSimulator;
exports.shadeLinearRgb = shadeLinearRgb;
exports.shortDate = shortDate;
exports.sizeArray = sizeArray;
exports.slugify = slugify;
exports.validatePassword = validatePassword;
exports.validateToken = validateToken;
exports.validatorPostCode = validatorPostCode;
exports.validatorUri = validatorUri;
exports.validatorUuid4 = validatorUuid4;
exports.viewPort = viewPort;
//# sourceMappingURL=industry-ui.js.map
