import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Image
 */
// React
import { any, bool, func, number, objectOf, oneOfType, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var Image = styled.img.attrs(function (props) {
  return {
    itemProp: 'contentUrl'
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var cover = _ref.cover;
  return cover && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      height: 150px;\n      object-fit: fill;\n      width: 100%;\n    "])));
}, function (_ref2) {
  var fluid = _ref2.fluid;
  return fluid && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      height: auto;\n      max-width: 100%;\n    "])));
}, function (_ref3) {
  var rounded = _ref3.rounded;
  return rounded && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-radius: 0.25rem;\n    "])));
}, function (_ref4) {
  var roundedCircle = _ref4.roundedCircle;
  return roundedCircle && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-radius: 50%;\n    "])));
}, function (_ref5) {
  var thumbnail = _ref5.thumbnail,
      theme = _ref5.theme;
  return thumbnail && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      border-radius: 0.25rem;\n      height: auto;\n      max-width: 100%;\n      padding: 0.65rem;\n    "])), theme.COLOUR.light, theme.COLOUR.dark);
});
Image.propTypes = {
  alt: string.isRequired,
  className: any,
  click: func,
  cover: bool,
  fluid: bool,
  rounded: bool,
  roundedCircle: bool,
  src: string.isRequired,
  style: objectOf(oneOfType([number, string])),
  thumbnail: bool
};
Image.defaultProps = {
  fluid: true,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
//# sourceMappingURL=image.js.map