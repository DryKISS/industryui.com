import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Figure
 */
// React
import React from 'react';
import { any, bool, node, number, objectOf, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { FigureCaption } from './caption';
import { FigureImage } from './image';

var Figure = function Figure(_ref) {
  var children = _ref.children,
      className = _ref.className,
      slant = _ref.slant,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledFigure, {
    children: children,
    className: className,
    itemProp: "image",
    itemScope: "",
    itemType: "http://schema.org/ImageObject",
    slant: slant,
    style: style
  });
};

Figure.displayName = "Figure";
var slantStyles = "\n  &:after {\n    background-color: #fff;\n    bottom: 0;\n    content: '';\n    display: block;\n    height: 25%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    transform: skewy(6deg);\n    transform-origin: 0 100%;\n    width: 100%;\n    z-index: 1;\n  }\n";
var StyledFigure = styled.figure(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  border: 0;\n  margin: 0 0 1rem;\n  ", "\n"])), function (props) {
  return props.slant && slantStyles;
});
Figure.propTypes = {
  children: node,
  className: any,
  slant: bool,
  style: objectOf(oneOfType([number, string]))
};
Figure.defaultProps = {
  slant: false
};
Figure.Caption = FigureCaption;
Figure.Image = FigureImage;
export { Figure };
//# sourceMappingURL=figure.js.map