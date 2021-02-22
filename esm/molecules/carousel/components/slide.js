import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Carousel Slide
 */
// React
import React from 'react';
import { func, node, object } from 'prop-types'; // Style

import styled from 'styled-components';
export var CarouselSlide = function CarouselSlide(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledSlide, {
    onClick: onClick,
    style: style
  }, children);
};
CarouselSlide.displayName = "CarouselSlide";
var StyledSlide = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  user-select: none;\n  img {\n    width: 100%;\n  }\n"])));
CarouselSlide.propTypes = {
  children: node.isRequired,
  onClick: func,
  style: object
};
//# sourceMappingURL=slide.js.map