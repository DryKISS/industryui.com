import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

/**
 * Components - Pricing
 */
// React
import React, { useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { ClickAwayListener, Icon, Text } from '../../../';
export var PricingDropdown = function PricingDropdown(_ref) {
  var onPlanChange = _ref.onPlanChange,
      pricingInfo = _ref.pricingInfo,
      selectedPlan = _ref.selectedPlan;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      IsOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var selected = pricingInfo[selectedPlan];

  var handleClickAway = function handleClickAway() {
    setIsOpen(false);
  };

  var handleClickOnWrapper = function handleClickOnWrapper() {
    setIsOpen(true);
  };

  var handlePlanClick = function handlePlanClick(planIndex) {
    onPlanChange(planIndex);
    setTimeout(function () {
      setIsOpen(false);
    }, 0);
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    onClick: handleClickOnWrapper,
    onClickAway: handleClickAway
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledTitle, {
    content: selected.title,
    context: "dark",
    size: "xl"
  })), /*#__PURE__*/React.createElement(PriceAndDropIconWrapper, null, /*#__PURE__*/React.createElement(StyledPrice, {
    content: selected.price,
    size: "lg",
    context: "deepBlue"
  }), /*#__PURE__*/React.createElement(StyledDownIcon, {
    icon: "caret-down",
    prefix: "fas"
  })), /*#__PURE__*/React.createElement(PlansWrapper, {
    open: IsOpen
  }, pricingInfo.map(function (item, index) {
    return /*#__PURE__*/React.createElement(PriceElement, {
      key: index,
      isLast: index === pricingInfo.length - 1,
      onClick: function onClick() {
        return handlePlanClick(index);
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledElementTitle, {
      content: item.title,
      context: item.recommended ? 'deepBlue' : 'dark',
      size: "sm"
    }), /*#__PURE__*/React.createElement(Text, {
      content: item.description,
      context: item.recommended ? 'deepBlue' : 'dark',
      size: "xs"
    })), /*#__PURE__*/React.createElement(PriceAndDropIconWrapper, null, item.recommended && /*#__PURE__*/React.createElement(StyledRecomendedText, {
      content: "Recommend by IUI",
      context: "gold40",
      size: "xs"
    }), /*#__PURE__*/React.createElement(StyledPrice, {
      content: item.price,
      size: "lg",
      context: "deepBlue"
    })));
  })));
};
PricingDropdown.displayName = "PricingDropdown";
var StyledRecomendedText = styled(Text)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: 700;\n  margin-inline-end: 2rem;\n"])));
var StyledElementTitle = styled(Text)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 700;\n"])));
var PriceElement = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  ", "\n  display: flex;\n  height: 3.5rem;\n  justify-content: space-between;\n  padding: 0 1.25rem;\n"])), function (_ref2) {
  var theme = _ref2.theme,
      isLast = _ref2.isLast;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-bottom: ", "px solid ", ";\n      background-color: ", ";\n    "])), isLast ? '0' : '1', theme.COLOUR.dark, theme.COLOUR.white);
});
var PlansWrapper = styled(ClickAwayListener)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 9px;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 3.7rem;\n  transition-property: opacity, transform;\n  transition-duration: 0.1s;\n  transition-timing-function: ease-in-out;\n  transform: translateY(-20px);\n  ", "\n  width: 100%;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.COLOUR.dark);
}, function (_ref4) {
  var open = _ref4.open;
  return open && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      opacity: 1;\n      transform: translateY(0px);\n      pointer-events: initial;\n    "])));
});
var StyledDownIcon = styled(Icon).attrs(function (props) {
  return {
    color: props.theme.COLOUR.deepBlue
  };
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));
var StyledPrice = styled(Text)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: 600;\n"])));
var PriceAndDropIconWrapper = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var StyledTitle = styled(Text)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: 600;\n"])));
var Wrapper = styled(ClickAwayListener)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 9px;\n  cursor: pointer;\n  display: flex;\n  height: 3.5rem;\n  justify-content: space-between;\n  margin: 6px;\n  padding: 0 1.5rem;\n  position: relative;\n  width: 100%;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.COLOUR.watterBlue;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "".concat(theme.COLOUR.dark);
});
//# sourceMappingURL=pricingDropdown.js.map