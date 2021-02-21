import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Services - Hooks  - useAxios
 */
// React
import { useContext, useState, useEffect } from 'react'; // Axios

import axios from 'axios'; // UI

import { ConfigContext } from '../services/config/context';
export var useAxios = function useAxios(url, params, initialValue) {
  var _useContext = useContext(ConfigContext),
      apiConfig = _useContext.apiConfig;

  var _useState = useState(_objectSpread(_objectSpread({}, initialValue), {}, {
    isLoading: true
  })),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    var bearerToken = window.localStorage.getItem('bearerToken');

    if (bearerToken) {
      apiConfig.headers.Authorization = 'Bearer ' + bearerToken;
    }

    var http = axios.create(apiConfig); // Mock requests

    var mocker = {};
    mocker.apply(http);

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var response, status;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return http.get(url, {
                  params: params
                });

              case 3:
                response = _context.sent;

                if (response.status === 200) {
                  setData(_objectSpread(_objectSpread({}, response.data), {}, {
                    isLoading: false
                  }));
                }

                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                status = _context.t0.response ? _context.t0.response.status : 404;
                setData({
                  status: status,
                  isLoading: false
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [url]);
  return {
    data: data
  };
};
//# sourceMappingURL=useAxios.js.map