/**
 * Components - Theme - Utils - Font Size
 */
// React
import { number, bool } from 'prop-types';
export var SPACER_FORMULA = function SPACER_FORMULA(factor) {
  return factor * 4;
};
export var SPACING = function SPACING() {
  var amount = 4;

  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (output, n) {
    return "".concat(output).concat(n * amount).concat(n > 0 ? 'px' : '', " ");
  }, '');
};
export var SPACER = function SPACER(_ref) {
  var m = _ref.m,
      m0 = _ref.m0,
      mx = _ref.mx,
      my = _ref.my,
      mt = _ref.mt,
      mb = _ref.mb,
      mr = _ref.mr,
      ml = _ref.ml,
      mAuto = _ref.mAuto,
      p = _ref.p,
      p0 = _ref.p0,
      px = _ref.px,
      py = _ref.py,
      pt = _ref.pt,
      pb = _ref.pb,
      pr = _ref.pr,
      pl = _ref.pl;
  var temp = '';

  if (m) {
    temp += "margin: ".concat(SPACER_FORMULA(m), "px !important;");
  }

  if (m0) {
    temp += 'margin: 0 !important;';
  }

  if (mx) {
    temp += "margin: 0 ".concat(SPACER_FORMULA(mx), "px !important;");
  }

  if (my) {
    temp += "margin: ".concat(SPACER_FORMULA(my), "px 0 !important;");
  }

  if (mt) {
    temp += "margin-top: ".concat(SPACER_FORMULA(mt), "px !important;");
  }

  if (mb) {
    temp += "margin-bottom: ".concat(SPACER_FORMULA(mb), "px !important;");
  }

  if (mr) {
    temp += "margin-right: ".concat(SPACER_FORMULA(mr), "px !important;");
  }

  if (ml) {
    temp += "margin-left: ".concat(SPACER_FORMULA(ml), "px !important;");
  }

  if (mAuto) {
    temp += 'margin: auto !important;';
  }

  if (p) {
    temp += "padding: ".concat(SPACER_FORMULA(p), "px !important;");
  }

  if (p0) {
    temp += 'padding: 0 !important;';
  }

  if (px) {
    temp += "padding: 0 ".concat(SPACER_FORMULA(px), "px !important;");
  }

  if (py) {
    temp += "padding: ".concat(SPACER_FORMULA(py), "px 0 !important;");
  }

  if (pt) {
    temp += "padding-top: ".concat(SPACER_FORMULA(pt), "px !important;");
  }

  if (pb) {
    temp += "padding-bottom: ".concat(SPACER_FORMULA(pb), "px !important;");
  }

  if (pr) {
    temp += "padding-right: ".concat(SPACER_FORMULA(pr), "px !important;");
  }

  if (pl) {
    temp += "padding-left: ".concat(SPACER_FORMULA(pl), "px !important;");
  }

  return temp;
};
export var SPACER_PROP_TYPES = {
  m: number,
  m0: bool,
  mx: number,
  my: number,
  mt: number,
  mb: number,
  mr: number,
  ml: number,
  mAuto: bool,
  p: number,
  p0: bool,
  px: number,
  py: number,
  pt: number,
  pb: number,
  pr: number,
  pl: number
};
//# sourceMappingURL=spacer.js.map