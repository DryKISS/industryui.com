import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Get Initial Locale
 * Gets the users locale string from locale storage
 *
 * @todo the User Provider should also push down a user saved locale
 * @todo we have a localstorage hook - use it
 */
// React
import { useContext } from 'react'; // UI

import { ConfigContext } from '../../';
export var isLocale = function isLocale(_ref) {
  var locales = _ref.locales,
      tested = _ref.tested;
  return locales.some(function (locale) {
    return locale === tested;
  });
};
export var GetInitialLocale = function GetInitialLocale() {
  var _useContext = useContext(ConfigContext),
      defaultLocale = _useContext.defaultLocale;

  var localSetting = window.localStorage.getItem('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  var _navigator$language$s = navigator.language.split('-'),
      _navigator$language$s2 = _slicedToArray(_navigator$language$s, 1),
      browserSetting = _navigator$language$s2[0];

  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
};
//# sourceMappingURL=service.js.map