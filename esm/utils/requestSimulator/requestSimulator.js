import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

/**
 * Mimics a request to server
 */
export function requestSimulator() {
  return _requestSimulator.apply(this, arguments);
}

function _requestSimulator() {
  _requestSimulator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var responseType,
        timeout,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            responseType = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'success';
            timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1000;
            _context.next = 4;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                if (responseType === 'success') {
                  resolve({
                    message: 'Success!'
                  });
                } else {
                  reject(new Error('Register failed!'));
                }
              }, timeout);
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestSimulator.apply(this, arguments);
}
//# sourceMappingURL=requestSimulator.js.map