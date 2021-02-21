/**
 * Intercom
 */
// React
import { memo, useEffect } from 'react';
import { string } from 'prop-types';
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
export var IntercomAPI = function IntercomAPI() {
  if (canUseDOM && window.Intercom) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    window.Intercom.apply(null, args);
  }
};
export var Intercom = /*#__PURE__*/memo(function (_ref) {
  var appID = _ref.appID;
  useEffect(function () {
    if (!appID || !canUseDOM) {
      return;
    }

    if (!window.Intercom) {
      ;

      (function (w, d, id, s, x) {
        function i() {
          i.c(arguments);
        }

        i.q = [];

        i.c = function (args) {
          i.q.push(args);
        };

        w.Intercom = i;
        s = d.createElement('script');
        s.async = 1;
        s.src = 'https://widget.intercom.io/widget/' + id;
        d.head.appendChild(s);
      })(window, document, appID);
    }

    window.intercomSettings = {
      app_id: appID,
      custom_launcher_selector: '#openIntercom'
    };

    if (window.Intercom) {
      window.Intercom('boot');
    }

    return function () {
      if (!canUseDOM || !window.Intercom) return false;
      window.Intercom('shutdown');
      delete window.Intercom;
      delete window.intercomSettings;
    };
  }, []);
  return false;
});
Intercom.propTypes = {
  appID: string.isRequired
};
//# sourceMappingURL=intercom.js.map