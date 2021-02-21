import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

/**
 * API
 */
// React
import { useContext } from 'react'; // Axios

import axios from 'axios'; // UI

import { ConfigContext } from '../';
export var Api = function Api() {
  var _useContext = useContext(ConfigContext),
      apiConfig = _useContext.apiConfig;

  return {
    init: function init() {
      var mocker = {};
      var bearerToken = window.localStorage.getItem('bearerToken');

      if (bearerToken) {
        apiConfig.headers.Authorization = 'Bearer ' + bearerToken;
      }

      var http = axios.create(apiConfig);
      mocker.apply(http);
      return http;
    },
    get: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url, params) {
        var http;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                http = Api.init();
                return _context.abrupt("return", http.get(url, {
                  params: params
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    post: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(url, data) {
        var http;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                http = Api.init();
                return _context2.abrupt("return", http.post(url, data));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function post(_x3, _x4) {
        return _post.apply(this, arguments);
      }

      return post;
    }(),
    put: function () {
      var _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(url, data) {
        var http;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                http = Api.init();
                return _context3.abrupt("return", http.put(url, data));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function put(_x5, _x6) {
        return _put.apply(this, arguments);
      }

      return put;
    }(),
    "delete": function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var http;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                http = Api.init();
                return _context4.abrupt("return", http["delete"](url));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  };
};
//# sourceMappingURL=api.js.map