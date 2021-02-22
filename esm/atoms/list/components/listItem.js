import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * List Item
 */
// React
import React from 'react';
import { bool, node, string } from 'prop-types'; // UI

import { Icon } from '../../icon'; // Style

import styled, { css } from 'styled-components';
export var ListItem = function ListItem(_ref) {
  var border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      flush = _ref.flush,
      group = _ref.group,
      icon = _ref.icon,
      prefix = _ref.prefix,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledItem, {
    border: border,
    className: className,
    flush: flush,
    group: group,
    style: style
  }, icon && /*#__PURE__*/React.createElement(StyledIcon, {
    "aria-hidden": "true",
    icon: icon,
    prefix: prefix,
    size: "2x"
  }), children);
};
ListItem.displayName = "ListItem";
var borderStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid rgba(0, 0, 0, 0.125);\n"])));
var flushStyles = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n\n  &:first-child {\n    border-top: 0;\n  }\n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 0;\n  }\n"])));
var groupStyles = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: -1px;\n  padding: 0.75rem 1.25rem;\n"])));
var StyledItem = styled.li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n  ", "\n  ", "\n"])), function (_ref2) {
  var border = _ref2.border,
      group = _ref2.group,
      flush = _ref2.flush;
  return (border || group || flush) && groupStyles;
}, function (_ref3) {
  var border = _ref3.border,
      flush = _ref3.flush;
  return (border || flush) && borderStyles;
}, function (_ref4) {
  var flush = _ref4.flush;
  return flush && flushStyles;
});
var StyledIcon = styled(Icon)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  float: left;\n  margin: 0.1rem 1rem 0 0;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.COLOUR.secondary;
});
ListItem.propTypes = {
  border: bool,
  children: node.isRequired,
  flush: bool,
  group: bool,
  icon: string,
  prefix: string
};
//# sourceMappingURL=listItem.js.map