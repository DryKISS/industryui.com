import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Shimmer
 */
// React
import React from 'react';
import { number, string } from 'prop-types'; // Style

import styled, { css, keyframes } from 'styled-components'; // Utils

import { shadeColor } from '../../';
export var Shimmer = function Shimmer(_ref) {
  var duration = _ref.duration,
      height = _ref.height,
      hexColour = _ref.hexColour,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(StyledShimmer, {
    duration: duration,
    height: height,
    hexColour: hexColour,
    width: width
  });
};
Shimmer.displayName = "Shimmer";
var placeholderShimmer = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n      background-position: -468px 0;\n    }\n\n    100% {\n      background-position: 468px 0;\n    }\n"])));
var defaultColour = '#f6f7f8';
var StyledShimmer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation-duration: ", ";\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: ", ";\n  animation-timing-function: linear;\n\n  ", "\n\n  background-repeat: no-repeat;\n  background-size: 800px 104px;\n  display: inline-block;\n  height: ", ";\n  position: relative;\n  width: ", ";\n"])), function (_ref2) {
  var duration = _ref2.duration;
  return duration ? duration + 'ms' : '1s';
}, placeholderShimmer, function (_ref3) {
  var hexColour = _ref3.hexColour;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background: ", ";\n      background-image: linear-gradient(\n        to right,\n        ", " 0%,\n        ", " 20%,\n        ", " 40%,\n        ", " 100%\n      );\n    "])), hexColour !== null && hexColour !== void 0 ? hexColour : defaultColour, hexColour !== null && hexColour !== void 0 ? hexColour : defaultColour, shadeColor(hexColour !== null && hexColour !== void 0 ? hexColour : defaultColour, -8), hexColour !== null && hexColour !== void 0 ? hexColour : defaultColour, hexColour !== null && hexColour !== void 0 ? hexColour : defaultColour);
}, function (_ref4) {
  var height = _ref4.height;
  return height !== null && height !== void 0 ? height : '100%';
}, function (_ref5) {
  var width = _ref5.width;
  return width !== null && width !== void 0 ? width : '100%';
});
Shimmer.propTypes = {
  duration: number,
  height: string,
  hexColour: string,
  width: string
};
//# sourceMappingURL=shimmer.js.map