import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
// Axios
import axios from 'axios'; // React

import { func, number, string } from 'prop-types';

var getAddressesApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(apiKey, postCode) {
    var _yield$axios$get, data;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios.get("https://api.getAddress.io/find/".concat(postCode, "?api-key=").concat(apiKey));

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", {
              response: data,
              hasError: false
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              response: 'Error While Getting Address List',
              hasError: true
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getAddressesApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var timeout;

var getAddresses = function getAddresses(_ref2) {
  var apiKey = _ref2.apiKey,
      callFunc = _ref2.callback,
      callThrottle = _ref2.callThrottle,
      postCode = _ref2.postCode,
      validator = _ref2.validator;
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    var isValid = validator(postCode);

    if (isValid) {
      var data = getAddressesApi(apiKey, postCode);
      data.then(function (res) {
        callFunc(res);
      });
    } else {
      callFunc({
        response: 'Invalid Postal Code',
        hasError: true
      });
    }
  }, callThrottle);
};

var addressStringSeparator = ', ';

var fixAddresses = function fixAddresses(addresses) {
  return addresses.map(function (addressString) {
    var elements = addressString.split(addressStringSeparator).filter(function (part) {
      return part !== '';
    });
    return elements.join(', ');
  }).map(function (item, index) {
    return {
      name: item,
      id: index
    };
  });
};

export var GetAddressService = {
  fixAddresses: fixAddresses,
  getAddresses: getAddresses,
  getAddressesApi: getAddressesApi
};
getAddresses.propTypes = {
  callback: func.isRequired,
  callThrottle: number.isRequired,
  postCode: string.isRequired,
  validator: func.isRequired
};
//# sourceMappingURL=index.js.map