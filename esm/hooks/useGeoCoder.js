import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Hooks  - useGeoCoder
 */
// React
import { useEffect, useState } from 'react'; // Services

import { GeoCoder } from '../services/google/geocoder/geocoder';
export var useGeoCoder = function useGeoCoder(_ref) {
  var address = _ref.address,
      apiKey = _ref.apiKey,
      city = _ref.city,
      language = _ref.language,
      region = _ref.region;

  var _useState = useState({
    lat: '',
    lng: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      coordinates = _useState2[0],
      setCoordinates = _useState2[1];

  useEffect(function () {
    var getCoordinates = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var geo, coordinates;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                geo = new GeoCoder({
                  apiKey: apiKey,
                  language: language,
                  region: region
                });
                _context.next = 3;
                return geo.fromAddress({
                  address: address,
                  city: city
                });

              case 3:
                coordinates = _context.sent;
                setCoordinates(coordinates);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getCoordinates() {
        return _ref2.apply(this, arguments);
      };
    }();

    getCoordinates();
  }, []);
  return coordinates;
};
//# sourceMappingURL=useGeoCoder.js.map