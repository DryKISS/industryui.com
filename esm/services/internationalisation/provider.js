import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Services - Internationalisation - Provider
 */
// React
import React, { useContext, useEffect, useState } from 'react'; // Next

import { useRouter } from 'next/router'; // UI

import { ConfigContext, InternationalisationContext, isLocale, useLocalStorage } from '../../';
export var InternationalisationProvider = function InternationalisationProvider(_ref) {
  var locale = _ref.locale,
      children = _ref.children;

  var _useContext = useContext(ConfigContext),
      locales = _useContext.locales;

  var _useLocalStorage = useLocalStorage('locale'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      getStoredLocale = _useLocalStorage2[0],
      setStoredLocale = _useLocalStorage2[1];

  var router = useRouter();

  var _useState = useState({
    locale: locale
  }),
      _useState2 = _slicedToArray(_useState, 2),
      localeState = _useState2[0],
      setLocaleState = _useState2[1];

  useEffect(function () {
    if (localeState !== getStoredLocale) {
      setStoredLocale(localeState);
    }
  }, [localeState]);
  useEffect(function () {
    if (isLocale({
      locales: locales,
      test: router === null || router === void 0 ? void 0 : router.query.lang
    }) && locale !== (router === null || router === void 0 ? void 0 : router.query.lang)) {
      setLocaleState({
        locale: router === null || router === void 0 ? void 0 : router.query.lang
      });
    }
  }, [router === null || router === void 0 ? void 0 : router.query.lang, localeState]);
  return /*#__PURE__*/React.createElement(InternationalisationContext.Provider, {
    value: {
      locale: localeState.locale,
      setLocale: setLocaleState
    }
  }, children);
};
InternationalisationProvider.displayName = "InternationalisationProvider";
//# sourceMappingURL=provider.js.map