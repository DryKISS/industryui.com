import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

/**
 * Components - Services - Translation
 */
// React
import { useContext } from 'react'; // Axios

import axios from 'axios'; // Config

import { ConfigContext } from '../../services/config/context';

var Translate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(text) {
    var from,
        to,
        _useContext,
        RapidApi,
        _data$,
        _data$$translations$,
        _yield$axios$post,
        data,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            from = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'es';
            to = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'en';
            _useContext = useContext(ConfigContext), RapidApi = _useContext.RapidApi;
            _context.prev = 3;
            _context.next = 6;
            return axios.post('https://microsoft-translator-text.p.rapidapi.com/translate', [{
              Text: text
            }], {
              params: {
                to: to,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
              },
              headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': RapidApi.apiKey,
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
              }
            });

          case 6:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            return _context.abrupt("return", {
              response: ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : (_data$$translations$ = _data$.translations[0]) === null || _data$$translations$ === void 0 ? void 0 : _data$$translations$.text) || text,
              hasError: false
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", {
              response: 'Error while translating text',
              hasError: true
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function Translate(_x) {
    return _ref.apply(this, arguments);
  };
}();

export var TranslationService = {
  Translate: Translate
};
//# sourceMappingURL=translation.js.map