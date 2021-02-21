import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Pagination - Item
 */
// React
import React, { memo } from 'react';
import { bool, any, func, string } from 'prop-types'; // UI

import { Button } from '../../../atoms/button/button/button';
import { themeFontSize } from '../../../theme/utils/fontSize'; // Style

import styled from 'styled-components';
export var PaginationItem = /*#__PURE__*/memo(function (_ref) {
  var active = _ref.active,
      context = _ref.context,
      disabled = _ref.disabled,
      label = _ref.label,
      onClick = _ref.onClick,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(StyledLi, null, /*#__PURE__*/React.createElement(StyledButton, {
    active: active,
    context: context,
    onClick: onClick,
    disabled: disabled,
    size: size
  }, label));
});
var StyledLi = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline;\n  &:first-child button {\n    margin-left: 0;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  &:last-child button {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n"])));
var StyledButton = styled(Button)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: ", ";\n  ", "\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0;\n  color: ", ";\n  line-height: 1.25;\n  margin-left: -1px;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n  ", "\n  &:hover {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n"])), function (_ref2) {
  var active = _ref2.active;
  return active ? 'unset' : 'pointer';
}, function (_ref3) {
  var active = _ref3.active;
  return active && 'pointer-events: none;';
}, function (_ref4) {
  var theme = _ref4.theme,
      active = _ref4.active,
      context = _ref4.context;
  return active ? theme.COLOUR[context] : theme.COLOUR.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.COLOUR.light;
}, function (_ref6) {
  var active = _ref6.active,
      context = _ref6.context,
      theme = _ref6.theme;
  return active ? theme.COLOUR.white : theme.COLOUR[context];
}, function (props) {
  return themeFontSize(props);
}, function (_ref7) {
  var active = _ref7.active,
      context = _ref7.context,
      theme = _ref7.theme;
  return active ? theme.COLOUR[context] : theme.COLOUR.light;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.light;
}, function (_ref9) {
  var active = _ref9.active,
      theme = _ref9.theme,
      context = _ref9.context;
  return active ? theme.COLOUR.white : theme.COLOUR[context];
});
PaginationItem.propTypes = {
  context: string,
  disabled: bool,
  label: any,
  onClick: func,
  size: string
};
PaginationItem.defaultProps = {
  context: 'secondary',
  size: 'md'
};
//# sourceMappingURL=item.js.map