/**
 * useTranslation
 *
 * @see https://dev.to/biscuitech/i18n-with-next-js-and-full-ssg-support-2aih
 *
 * @todo Translations are usually pushed into the provider not here!
 */
// React
import { useContext } from 'react'; // UI

import { ConfigContext } from '../../services/config/context';
import { InternationalisationContext } from '../../services/internationalisation/context';
export var useTranslation = function useTranslation() {
  var _useContext = useContext(ConfigContext),
      defaultLocale = _useContext.defaultLocale,
      Translations = _useContext.Translations;

  var _useContext2 = useContext(InternationalisationContext),
      locale = _useContext2.locale;

  var t = function t(key) {
    if (!Translations[locale][key]) {
      // Debug
      console.warn("Translation '".concat(key, "' for locale '").concat(locale, "' not found."));
    }

    return Translations[locale][key] || Translations[defaultLocale][key] || '';
  };

  return {
    t: t,
    locale: locale
  };
};
//# sourceMappingURL=translation.js.map