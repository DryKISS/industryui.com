import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Atoms - Grid - Components - Column
 */
// React
import React from 'react';
import { any, number, objectOf, oneOfType, string, shape } from 'prop-types'; // Style

import styled from 'styled-components';
export var Column = function Column(_ref) {
  var children = _ref.children,
      className = _ref.className,
      columnRef = _ref.columnRef,
      style = _ref.style,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      offset = _ref.offset;
  sm = sm !== undefined ? sm : 0;
  md = md !== undefined ? md : sm;
  lg = lg !== undefined ? lg : md;
  xl = xl !== undefined ? xl : lg;
  offset.sm = offset.sm !== undefined ? offset.sm : 0;
  offset.md = offset.md !== undefined ? offset.md : offset.sm;
  offset.lg = offset.lg !== undefined ? offset.lg : offset.md;
  offset.xl = offset.xl !== undefined ? offset.xl : offset.lg;
  return /*#__PURE__*/React.createElement(StyledColumn, {
    children: children,
    className: className,
    off: offset,
    size: {
      sm: sm,
      md: md,
      lg: lg,
      xl: xl
    },
    style: style,
    ref: columnRef
  });
};
Column.displayName = "Column";
var StyledColumn = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  height: 100%;\n  margin-left: unset;\n  min-height: 1px;\n  position: relative;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  width: 100%;\n\n  /* SM Medium devices (tablets, 576px and up) */\n  @media (min-width: 0) {\n    flex: 0 0\n      ", "%;\n    margin-left: ", "%;\n    max-width: ", "%;\n  }\n\n  /* MD Medium devices (tablets, 768px and up) */\n  @media (min-width: ", "px) {\n    flex: 0 0 ", "%;\n    margin-left: ", "%;\n    max-width: ", "%;\n  }\n\n  /* LG Large devices (desktops, 992px and up) */\n  @media (min-width: ", "px) {\n    flex: 0 0 ", "%;\n    margin-left: ", "%;\n    max-width: ", "%;\n  }\n\n  /* XL Extra large devices (large desktops, 1200px and up) */\n  @media (min-width: ", "px) {\n    flex: 0 0 ", "%;\n    margin-left: ", "%;\n    max-width: ", "%;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.GRID.gutterWidth / 2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.GRID.gutterWidth / 2;
}, function (_ref4) {
  var size = _ref4.size;
  return size.sm ? (100 / (12 / size.sm)).toFixed(5) : 100;
}, function (_ref5) {
  var off = _ref5.off;
  return off.sm ? (100 / 12 * off.sm).toFixed(5) : 0;
}, function (_ref6) {
  var size = _ref6.size;
  return size.sm ? (100 / (12 / size.sm)).toFixed(5) : 100;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.GRID.breakpoints.md;
}, function (_ref8) {
  var size = _ref8.size;
  return (100 / (12 / size.md)).toFixed(5);
}, function (_ref9) {
  var off = _ref9.off;
  return (100 / 12 * off.md).toFixed(5);
}, function (_ref10) {
  var size = _ref10.size;
  return (100 / (12 / size.md)).toFixed(5);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.GRID.breakpoints.lg;
}, function (_ref12) {
  var size = _ref12.size;
  return (100 / (12 / size.lg)).toFixed(5);
}, function (_ref13) {
  var off = _ref13.off;
  return (100 / 12 * off.lg).toFixed(5);
}, function (_ref14) {
  var size = _ref14.size;
  return (100 / (12 / size.lg)).toFixed(5);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.GRID.breakpoints.xl;
}, function (_ref16) {
  var size = _ref16.size;
  return (100 / (12 / size.xl)).toFixed(5);
}, function (_ref17) {
  var off = _ref17.off;
  return (100 / 12 * off.xl).toFixed(5);
}, function (_ref18) {
  var size = _ref18.size;
  return (100 / (12 / size.xl)).toFixed(5);
});
Column.propTypes = {
  children: any.isRequired,
  className: string,
  md: number,
  lg: number,
  offset: shape({
    sm: number,
    md: number,
    lg: number,
    xl: number
  }),
  sm: number,
  style: objectOf(oneOfType([number, string])),
  xl: number
};
Column.defaultProps = {
  offset: {},
  style: {},
  debug: false
};
//# sourceMappingURL=Column.js.map