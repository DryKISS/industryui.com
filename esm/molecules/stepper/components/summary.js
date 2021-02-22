import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Stepper Summary
 */
// React
import React from 'react';
import { array, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var StepperSummary = function StepperSummary(_ref) {
  var className = _ref.className,
      summary = _ref.summary;

  var renderItems = function renderItems(summary) {
    return summary.map(function (_ref2, i) {
      var label = _ref2.label,
          value = _ref2.value;
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement(StyledLabel, null, label, " "), /*#__PURE__*/React.createElement(StyledValue, null, value));
    });
  };

  return /*#__PURE__*/React.createElement(StyledStepperSummary, null, /*#__PURE__*/React.createElement("ul", null, renderItems(summary)));
};
StepperSummary.displayName = "StepperSummary";
var StyledStepperSummary = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  > ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n"])));
var StyledLabel = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 0.85rem;\n"])));
var StyledValue = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 0.85rem;\n  color: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.black;
});
StepperSummary.propTypes = {
  className: string,
  summary: array.isRequired
};
//# sourceMappingURL=summary.js.map