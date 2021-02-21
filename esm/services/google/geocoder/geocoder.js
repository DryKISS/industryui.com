import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

/**
 * Google - GeoCoder
 */
// Axios
import axios from 'axios';
export var GeoCoder = /*#__PURE__*/function () {
  function GeoCoder(_ref) {
    var apiKey = _ref.apiKey,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug,
        language = _ref.language,
        region = _ref.region;

    _classCallCheck(this, GeoCoder);

    this.apiKey = apiKey;
    this.debug = debug;
    this.language = language;
    this.region = region;
    this.GOOGLE_API_URL = 'https://maps.google.com/maps/api/geocode/json';
  }

  _createClass(GeoCoder, [{
    key: "log",
    value: function log(message) {
      var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.debug) {
        if (warn) {
          console.warn(message);
        } else {
          console.info(message);
        }
      }
    }
  }, {
    key: "handleUrl",
    value: function () {
      var _handleUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url) {
        var response;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(url)["catch"](function () {
                  return Promise.reject(new Error('Error fetching data'));
                });

              case 2:
                response = _context.sent;

                if (!(response.data.status === 'OK')) {
                  _context.next = 6;
                  break;
                }

                this.log(response.data);
                return _context.abrupt("return", response.data);

              case 6:
                this.log("".concat(response.statusText, ".\nServer returned status code ").concat(response.statusText), true);
                return _context.abrupt("return", Promise.reject(new Error("".concat(response.statusText, ".\nServer returned status code ").concat(response.statusText))));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleUrl(_x) {
        return _handleUrl.apply(this, arguments);
      }

      return handleUrl;
    }()
  }, {
    key: "fromAddress",
    value: function () {
      var _fromAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2) {
        var address, _ref2$city, city, location, url, _yield$this$handleUrl, _yield$this$handleUrl2, result, _result$geometry$loca, lat, lng, coordinates;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = _ref2.address, _ref2$city = _ref2.city, city = _ref2$city === void 0 ? '' : _ref2$city;

                if (address) {
                  _context2.next = 4;
                  break;
                }

                this.log('Provided address is invalid', true);
                return _context2.abrupt("return", Promise.reject(new Error('Provided address is invalid')));

              case 4:
                location = encodeURIComponent(city + ', ' + address);
                url = "".concat(this.GOOGLE_API_URL, "?address=").concat(location);

                if (this.apiKey) {
                  url += "&key=".concat(this.apiKey);
                }

                if (this.language) {
                  url += "&language=".concat(this.language);
                }

                if (this.region) {
                  url += "&region=".concat(encodeURIComponent(this.region));
                }

                _context2.next = 11;
                return this.handleUrl(url);

              case 11:
                _yield$this$handleUrl = _context2.sent;
                _yield$this$handleUrl2 = _slicedToArray(_yield$this$handleUrl.results, 1);
                result = _yield$this$handleUrl2[0];
                _result$geometry$loca = result.geometry.location, lat = _result$geometry$loca.lat, lng = _result$geometry$loca.lng;
                coordinates = {
                  lat: lat,
                  lng: lng
                };
                return _context2.abrupt("return", Promise.resolve(coordinates));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fromAddress(_x2) {
        return _fromAddress.apply(this, arguments);
      }

      return fromAddress;
    }()
  }]);

  return GeoCoder;
}();
//# sourceMappingURL=geocoder.js.map