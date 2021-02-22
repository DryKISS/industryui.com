import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Carousel Sample Slide
 */
// React
import React from 'react';
import { node, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { CarouselSlide } from './slide';
import { Image, Text } from '../../../';
export var CarouselSampleSlide = function CarouselSampleSlide(_ref) {
  var context = _ref.context,
      img = _ref.img,
      node = _ref.node,
      text = _ref.text;
  if (!img && !text) return null;
  return /*#__PURE__*/React.createElement(CarouselSlide, null, node, text && /*#__PURE__*/React.createElement(StyledText, {
    content: text,
    context: context,
    size: "xl"
  }), img && /*#__PURE__*/React.createElement(Image, {
    src: img
  }));
};
CarouselSampleSlide.displayName = "CarouselSampleSlide";
var StyledText = styled(Text)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 2em;\n  left: 2em;\n"])));
CarouselSampleSlide.propTypes = {
  context: string,
  img: string,
  node: node,
  text: string
};
CarouselSampleSlide.defaultProps = {
  context: 'dark'
};
//# sourceMappingURL=sample.js.map