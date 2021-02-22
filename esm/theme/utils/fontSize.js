/**
 * Components - Theme - Utils - Font Size
 */
// Utils
import { THEME_SIZE } from '../../';
export var themeFontSize = function themeFontSize(_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  var fontSize = size && Object.values(THEME_SIZE).indexOf(size);
  return "font-size: ".concat(fontSize > -1 ? theme.TYPOGRAPHY.fontSizes[fontSize] + 'px' : theme.TYPOGRAPHY.fontSizeBase, ";");
};
//# sourceMappingURL=fontSize.js.map