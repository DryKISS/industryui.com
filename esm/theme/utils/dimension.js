/**
 * Components - Theme - Utils - Dimension
 */
// React
import { bool } from 'prop-types';
export var themeDimension = function themeDimension(_ref) {
  var h100 = _ref.h100,
      w100 = _ref.w100,
      h100vh = _ref.h100vh,
      w100vw = _ref.w100vw;
  var temp = '';

  if (h100) {
    temp += 'height: 100% !important;';
  }

  if (w100) {
    temp += 'width: 100% !important;';
  }

  if (h100vh) {
    temp += 'height: 100vh !important;';
  }

  if (w100vw) {
    temp += 'width: 100vw !important;';
  }

  return temp;
};
export var DIMENSION_PROP_TYPES = {
  h100: bool,
  w100: bool,
  h100vh: bool,
  w100vw: bool
};
//# sourceMappingURL=dimension.js.map