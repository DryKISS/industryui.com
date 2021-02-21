/**
 * Components - Theme - Constants - Colour List
 */
// UI
import { THEME_COLOUR } from '../variables/colour';
export var THEME_COLOUR_LIST = function () {
  var list = [];

  for (var key in THEME_COLOUR) {
    var id = (Math.random() * 0xffffffff << 0).toString(16);
    list.push({
      colour: THEME_COLOUR[key],
      id: id
    });
  }

  return list;
}();
//# sourceMappingURL=colourList.js.map