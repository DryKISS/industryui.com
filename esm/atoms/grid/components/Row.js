import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Atoms - Grid - Components - Row
 */
// React
import React from 'react';
import { node, number, objectOf, oneOf, oneOfType, string, bool } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var Row = function Row(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      justify = _ref.justify,
      noGutter = _ref.noGutter,
      noWrap = _ref.noWrap,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledRow, {
    align: align,
    children: children,
    className: className,
    justify: justify,
    noGutter: noGutter,
    noWrap: noWrap,
    style: style
  });
};
Row.displayName = "Row";
var StyledRow = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-wrap: ", ";\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var noWrap = _ref2.noWrap;
  return noWrap ? 'nowrap' : 'wrap';
}, function (_ref3) {
  var theme = _ref3.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: -", "px;\n    margin-right: -", "px;\n  "])), theme.GRID.gutterWidth / 2, theme.GRID.gutterWidth / 2);
}, function (_ref4) {
  var noGutter = _ref4.noGutter,
      theme = _ref4.theme;
  return noGutter && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: -", "px;\n      margin-right: -", "px;\n    "])), theme.GRID.gutterWidth, theme.GRID.gutterWidth);
}, function (_ref5) {
  var align = _ref5.align;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    align-items: ", ";\n  "])), align === 'start' && 'flex-start' || align === 'end' && 'flex-end' || align === 'center' && 'center' || align === 'stretch' && 'stretch' || align === 'baseline' && 'baseline');
}, function (_ref6) {
  var justify = _ref6.justify;
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    justify-content: ", ";\n  "])), justify === 'start' && 'flex-start' || justify === 'end' && 'flex-end' || justify === 'between' && 'space-between' || justify === 'around' && 'space-around' || justify === 'center' && 'center' || justify === 'initial' && 'initial' || justify === 'inherit' && 'inherit');
});
Row.propTypes = {
  align: oneOf(['baseline', 'start', 'center', 'end', 'stretch']),
  children: node.isRequired,
  className: string,
  justify: oneOf(['start', 'center', 'end', 'between', 'around', 'initial', 'inherit']),
  noGutter: bool,
  noWrap: bool,
  style: objectOf(oneOfType([number, string]))
};
Row.defaultProps = {
  align: 'stretch',
  justify: 'start',
  noGutter: false,
  style: {},
  noWrap: false
};
//# sourceMappingURL=Row.js.map