import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Components - Molecules - Tabs - Components - Tab
 */
// React
import React, { useEffect, useRef } from 'react';
import { bool, func, number, object, oneOfType, string } from 'prop-types'; // UI

import { slugify } from '../../../'; // Style

import styled, { css } from 'styled-components';
export var Tab = function Tab(_ref) {
  var activeTab = _ref.activeTab,
      childClick = _ref.childClick,
      context = _ref.context,
      data = _ref.data,
      disabled = _ref.disabled,
      gap = _ref.gap,
      index = _ref.index,
      indicatorSize = _ref.indicatorSize,
      label = _ref.label,
      onClick = _ref.onClick,
      scrollToActiveTab = _ref.scrollToActiveTab;
  var tabRef = useRef(null);
  var labelSlug = slugify(label);
  var isActive = activeTab.label === labelSlug;
  useEffect(function () {
    if (scrollToActiveTab && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    }
  }, [isActive]);

  var handleClick = function handleClick(e) {
    if (isActive) {
      return;
    }

    onClick && onClick({
      index: index,
      label: labelSlug
    });
    childClick && childClick();
  }; // If no data then default to Cypress ID


  if (!data) {
    data = {
      'data-cy': "".concat(labelSlug, "Tab")
    };
  }

  return /*#__PURE__*/React.createElement(StyledTab, _extends({
    active: isActive,
    context: context
  }, data, {
    disabled: disabled,
    indicatorSize: indicatorSize,
    onClick: handleClick,
    ref: isActive && scrollToActiveTab ? tabRef : null,
    gap: gap
  }), label);
};
Tab.displayName = "Tab";
var StyledTab = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover {\n    ", "\n\n    ", "\n  }\n\n  &:last-of-type {\n    border-top-right-radius: ", ";\n    border-top-left-radius: inherit;\n    border-right: 1px solid ", ";\n  }\n\n  &:first-child {\n    border-top-left-radius: ", ";\n    border-top-right-radius: inherit;\n    border-right: 0px;\n  }\n\n  min-width: fit-content;\n  display: inline-block;\n  list-style: none;\n  margin-bottom: -1px;\n  padding: 0.5rem 0.75rem;\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme,
      gap = _ref2.gap;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-left: 1px solid ", ";\n    border-bottom: 1px solid\n      ", ";\n    border-top: 1px solid ", ";\n    color: ", ";\n    ", "\n  "])), theme.TABS.colour, theme.TABS.borderColour, context ? theme.COLOUR[context] : theme.TABS.borderColour, theme.TABS.borderColour, theme.TABS.tabTextColour, gap !== 0 && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), theme.TABS.borderColour));
}, function (_ref3) {
  var active = _ref3.active,
      context = _ref3.context,
      indicatorSize = _ref3.indicatorSize,
      theme = _ref3.theme;
  return active && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-bottom: ", "px solid ", ";\n      color: ", ";\n    "])), theme.TABS.activeColour, indicatorSize, theme.COLOUR.primary, theme.TABS.activeTabTextColour);
}, function (_ref4) {
  var active = _ref4.active,
      theme = _ref4.theme;
  return !active && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      cursor: pointer;\n    "])));
}, function (_ref5) {
  var disabled = _ref5.disabled,
      theme = _ref5.theme;
  return disabled && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      cursor: not-allowed;\n    "])), theme.TABS.disabledColour);
}, function (_ref6) {
  var active = _ref6.active,
      theme = _ref6.theme;
  return !active && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        background-color: ", ";\n      "])), theme.TABS.hoverColour);
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;
  return disabled && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        background-color: ", ";\n      "])), theme.TABS.disabledColour);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.TABS.borderRadius;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.TABS.borderColour;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.TABS.borderRadius;
});
Tab.propTypes = {
  activeTab: string.isRequired,
  childClick: func,
  context: oneOfType([bool, string]),
  data: object,
  disabled: bool,
  index: number,
  label: string.isRequired,
  onClick: oneOfType([bool, func]).isRequired,
  scrollToActiveTab: bool
};
Tab.defaultProps = {
  context: false,
  scrollToActiveTab: true
};
//# sourceMappingURL=tab.js.map