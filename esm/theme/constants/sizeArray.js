/**
 * Components - Theme - Constants - Size Array
 */
// UI
import { THEME_SIZE } from './size';
export var THEME_SIZE_ARRAY = function () {
  var array = [];

  for (var key in THEME_SIZE) {
    array.push(THEME_SIZE[key]);
  }

  return array;
}();
//# sourceMappingURL=sizeArray.js.map