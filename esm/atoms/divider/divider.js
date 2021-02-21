import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Atoms - Divider
 */
// Style
import styled, { css } from 'styled-components'; // UI

import { THEME_SIZE } from '../../theme/constants/size';
import { propTypes, defaultProps } from './props';
export var Divider = styled.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: none;\n  height: ", "px;\n  flex-shrink: 0;\n  width: 100%;\n  ", "\n\n  ", "\n\n  margin: ", ";\n\n  ", "\n"])), function (_ref) {
  var dashed = _ref.dashed,
      thickness = _ref.thickness;
  return dashed ? 2 : thickness;
}, function (_ref2) {
  var context = _ref2.context,
      dashed = _ref2.dashed,
      theme = _ref2.theme,
      vertical = _ref2.vertical;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background-image: linear-gradient(\n        ", "deg,\n        ", ",\n        ", " 60%,\n        ", " 60%,\n        ", " 100%\n      );\n      background-size: ", ";\n      border: none;\n    "])), vertical ? 0 : 90, theme.COLOUR[context], theme.COLOUR[context], dashed ? 'transparent' : theme.COLOUR[context], dashed ? 'transparent' : theme.COLOUR[context], vertical ? '1px 11px' : ' 11px 1px');
}, function (_ref3) {
  var dashed = _ref3.dashed,
      vertical = _ref3.vertical,
      height = _ref3.height;
  return vertical && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      width: ", "px;\n      height: ", ";\n    "])), function (_ref4) {
    var thickness = _ref4.thickness;
    return dashed ? 2 : thickness;
  }, height !== null && height !== void 0 ? height : '100%');
}, function (_ref5) {
  var size = _ref5.size,
      theme = _ref5.theme,
      vertical = _ref5.vertical;
  var margin = '1rem';

  switch (size) {
    case THEME_SIZE.XXS:
      margin = '0.25rem';
      break;

    case THEME_SIZE.SM:
      margin = '0.5rem';
      break;

    case THEME_SIZE.MD:
      margin = '1rem';
      break;

    case THEME_SIZE.LG:
      margin = '2rem';
      break;

    case THEME_SIZE.XL:
      margin = '3rem';
      break;

    case THEME_SIZE.XXL:
      margin = '4rem';
      break;

    case THEME_SIZE.XXXL:
      margin = '8rem';
      break;

    default:
      break;
  }

  return vertical ? '0 ' + margin : margin + ' 0';
}, function (_ref6) {
  var flexItem = _ref6.flexItem;
  return flexItem && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      height: auto;\n      align-self: stretch;\n    "])));
});
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
//# sourceMappingURL=divider.js.map