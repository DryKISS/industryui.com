import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Atoms - Grid - Components - Container
 * Creates a container for the Grid based layout. This container can be fluid or
 * fixed based on the UI breakpoints.
 */
// React
import React from 'react';
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fluid = _ref.fluid,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledGrid, {
    children: children,
    className: className,
    fluid: fluid,
    style: style
  });
};
Container.displayName = "Container";
var StyledGrid = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: ", ";\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var fluid = _ref2.fluid;
  return fluid && '100%';
}, function (_ref3) {
  var theme = _ref3.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding-left: ", "px;\n    padding-right: ", "px;\n  "])), theme.GRID.gutterWidth / 2, theme.GRID.gutterWidth / 2);
}, function (_ref4) {
  var fluid = _ref4.fluid;
  return !fluid && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      @media (min-width: ", "px) {\n        max-width: ", "px;\n      }\n\n      @media (min-width: ", "px) {\n        max-width: ", "px;\n      }\n\n      @media (min-width: ", "px) {\n        max-width: ", "px;\n      }\n\n      @media (min-width: ", "px) {\n        max-width: ", "px;\n      }\n    "])), function (_ref5) {
    var theme = _ref5.theme;
    return theme.GRID.breakpoints.sm;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.GRID.containerWidths.sm;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.GRID.breakpoints.md;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.GRID.containerWidths.md;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.GRID.breakpoints.lg;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.GRID.containerWidths.lg;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.GRID.breakpoints.xl;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.GRID.containerWidths.xl;
  });
});
Container.propTypes = {
  children: node.isRequired,
  className: string,
  fluid: bool,
  style: objectOf(oneOfType([number, string]))
};
Container.defaultProps = {
  fluid: false,
  style: {}
};
//# sourceMappingURL=Container.js.map