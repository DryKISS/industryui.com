import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Accordion Item
 */
// React
import React, { memo } from 'react';
import { bool, oneOf, string, func, number } from 'prop-types'; // UI

import { Icon } from '../../../atoms/icon';
import { THEME_CONTEXT } from '../../../theme/constants/context'; // Styled

import styled from 'styled-components';
export var AccordionItem = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      handleOpen = _ref.handleOpen,
      index = _ref.index,
      open = _ref.open,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(StyledAccordionItem, {
    className: className
  }, /*#__PURE__*/React.createElement(Header, {
    className: open ? 'opened' : 'closed',
    onClick: function onClick() {
      return handleOpen(index);
    },
    context: context || 'dark'
  }, title, ' ', /*#__PURE__*/React.createElement(HeaderIcon, {
    "aria-hidden": "true",
    context: "white",
    icon: open ? 'chevron-up' : 'chevron-down'
  })), /*#__PURE__*/React.createElement(Content, {
    className: open ? 'opened' : 'closed'
  }, children));
}, function (_ref2, _ref3) {
  var prevOpenState = _ref2.open,
      prevContext = _ref2.context;
  var nextOpenState = _ref3.open,
      nextContext = _ref3.context;
  return prevOpenState === nextOpenState && prevContext === nextContext;
});
var StyledAccordionItem = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:last-child header.closed {\n    border: 0;\n  }\n"])));
var Header = styled.header(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.75rem 1.25rem;\n"])), function (_ref4) {
  var context = _ref4.context,
      theme = _ref4.theme;
  return theme.COLOUR[context];
}, function (props) {
  return props.theme.COLOUR[props.context];
}, function (_ref5) {
  var context = _ref5.context,
      theme = _ref5.theme;
  return context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white;
});
var HeaderIcon = styled(Icon)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  float: right;\n"])));
var Content = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-height: 0;\n  overflow: hidden;\n  &.opened {\n    max-height: fit-content;\n    padding: 1.25rem;\n  }\n"])));
AccordionItem.propTypes = {
  children: string.isRequired,
  className: string,
  context: oneOf(Object.values(THEME_CONTEXT)),
  handleOpen: func,
  index: number,
  open: bool,
  title: string.isRequired
};
AccordionItem["default"] = {
  context: 'dark',
  open: false
};
//# sourceMappingURL=accordionItem.js.map