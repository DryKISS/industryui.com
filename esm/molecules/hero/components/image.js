import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Hero - Image
 * Displays an image to the right hand side of the main CTA copy
 */
// React
import React from 'react';
import { number, string } from 'prop-types'; // UI

import { Column, Image } from '../../../'; // Style

import styled from 'styled-components';
export var HeroImage = function HeroImage(_ref) {
  var alt = _ref.alt,
      align = _ref.align,
      image = _ref.image,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(StyledColumn, {
    align: align,
    md: 6
  }, /*#__PURE__*/React.createElement(StyledImageContainer, null, /*#__PURE__*/React.createElement(StyledImage, {
    alt: alt,
    src: image,
    width: width
  })));
};
HeroImage.displayName = "HeroImage";
var StyledColumn = styled(Column)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-self: ", ";\n"])), function (_ref2) {
  var align = _ref2.align;
  return align || 'flex-end';
});
var StyledImageContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: start;\n  margin: 10px 0;\n"])));
var StyledImage = styled(Image)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n"])), function (_ref3) {
  var width = _ref3.width;
  return width ? "".concat(width, "%") : '85%';
}, function (_ref4) {
  var height = _ref4.height;
  return height ? "".concat(height, "%") : '85%';
});
HeroImage.propTypes = {
  alt: string,
  image: string,
  width: number
};
//# sourceMappingURL=image.js.map