/**
 * Components - Theme - Utils - Dimension
 */
// React
import { bool } from 'prop-types';
export var themeDisplay = function themeDisplay(_ref) {
  var dBlock = _ref.dBlock,
      dFlex = _ref.dFlex,
      dInline = _ref.dInline,
      dInlineBlock = _ref.dInlineBlock,
      dInlineFlex = _ref.dInlineFlex,
      dNone = _ref.dNone;
  var display = null;

  if (dBlock) {
    display = 'block';
  }

  if (dFlex) {
    display = 'flex';
  }

  if (dInline) {
    display = 'inline';
  }

  if (dInlineBlock) {
    display = 'inline-block';
  }

  if (dInlineFlex) {
    display = 'inline-flex';
  }

  if (dNone) {
    display = 'none';
  }

  return display ? "display: ".concat(display, " !important;") : '';
};
export var DISPLAY_PROP_TYPES = {
  dBlock: bool,
  dFlex: bool,
  dInline: bool,
  dInlineBlock: bool,
  dInlineFlex: bool,
  dNone: bool
};
//# sourceMappingURL=display.js.map