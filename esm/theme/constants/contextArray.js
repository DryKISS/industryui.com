/**
 * Components - Theme - Constants - Contaxt Array
 */
// UI
import { THEME_CONTEXT } from './context';
export var THEME_CONTEXT_ARRAY = function () {
  var array = [];

  for (var key in THEME_CONTEXT) {
    array.push(THEME_CONTEXT[key]);
  }

  return array;
}();
//# sourceMappingURL=contextArray.js.map