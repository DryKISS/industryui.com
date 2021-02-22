import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Stepper
 */
// React
import React from 'react';
import { object } from 'prop-types'; // UI

import { Button, Divider, Icon, STEPPER } from '../../../'; // Style

import styled from 'styled-components';
export var StepperItem = function StepperItem(_ref) {
  var item = _ref.item;

  var renderContent = function renderContent(content) {
    return content.map(function (_ref2) {
      var id = _ref2.id,
          active = _ref2.active,
          data = _ref2.data;
      return active && /*#__PURE__*/React.createElement("li", {
        key: id
      }, typeof data === 'function' ? data() : data);
    });
  };

  var renderActions = function renderActions(actions) {
    return actions.map(function (_ref3) {
      var id = _ref3.id,
          active = _ref3.active,
          content = _ref3.content,
          context = _ref3.context,
          data = _ref3.data,
          handleClick = _ref3.handleClick,
          to = _ref3.to,
          type = _ref3.type;
      return active && /*#__PURE__*/React.createElement("li", {
        key: id
      }, type === 'button' && /*#__PURE__*/React.createElement(Button, _extends({
        onClick: handleClick,
        content: content,
        context: context,
        size: "xs"
      }, data)));
    });
  };

  return /*#__PURE__*/React.createElement(StyledStepperItem, null, /*#__PURE__*/React.createElement(StyledIconContainer, {
    active: item.date
  }, item.date && /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    color: STEPPER.colourCheckmark,
    fixedWidth: false,
    icon: "check",
    prefix: "fas"
  })), /*#__PURE__*/React.createElement(StyledLabel, {
    active: item.date
  }, item.label), (item.date || item.info) && /*#__PURE__*/React.createElement(StyledInfo, null, item.date || item.info), item.content && item.content.length > 0 && /*#__PURE__*/React.createElement(StyledContent, null, renderContent(item.content)), item.actions && item.actions.length > 0 && /*#__PURE__*/React.createElement(StyledContent, null, renderActions(item.actions)), item.label !== 'Closed' && /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  }));
};
StepperItem.displayName = "StepperItem";
var StyledStepperItem = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-left: 3px solid ", ";\n  padding: 0 1rem 1px;\n  position: relative;\n  &:last-child {\n    border: 0;\n    margin-left: 3px;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.STEPPER.colour;
});
var StyledIconContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background: ", ";\n  border: 3px solid ", ";\n  border-radius: 50%;\n  display: flex;\n  height: 1.5rem;\n  justify-content: center;\n  left: -13px;\n  position: absolute;\n  top: 0;\n  width: 1.5rem;\n"])), function (_ref5) {
  var active = _ref5.active,
      theme = _ref5.theme;
  return active ? theme.STEPPER.colour : '#fff';
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.STEPPER.colour;
});
var StyledContent = styled.ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  list-style: none;\n  margin: 0.5rem;\n  padding: 0;\n  li {\n    margin-bottom: 5px;\n  }\n"])));
var StyledLabel = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 0 0.5rem;\n"])), function (_ref7) {
  var active = _ref7.active,
      theme = _ref7.theme;
  return active ? theme.COLOUR.black : theme.COLOUR.dark;
});
var StyledInfo = styled.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 0.75rem;\n"])));
StyledStepperItem.propTypes = {
  item: object
};
//# sourceMappingURL=stepperItem.js.map