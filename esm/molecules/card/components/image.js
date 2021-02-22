import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Card image
 */
// React
import React from 'react';
import { string } from 'prop-types'; // UI

import { Image } from '../../../'; // Style

import styled from 'styled-components';
export var CardImage = function CardImage(_ref) {
  var alt = _ref.alt,
      header = _ref.header,
      src = _ref.src;
  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(StyledImage, {
    alt: alt,
    fluid: false,
    imageClasses: "rounded",
    src: src
  }, header));
};
CardImage.displayName = "CardImage";
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n"])));
var StyledImage = styled(Image)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  object-fit: cover;\n  width: 100%;\n\n  .rounded {\n    border-radius: 0.25rem 0.25rem 0 0;\n    border-style: none;\n  }\n"])));
CardImage.propTypes = {
  alt: string.isRequired,
  src: string.isRequired
};
//# sourceMappingURL=image.js.map