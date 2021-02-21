import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Stepper
 */
// React
import React from 'react';
import { array, func, oneOfType, string } from 'prop-types'; // UI

import { StepperItem, StepperSummary } from '../../../'; // Style

import styled from 'styled-components';
export var Stepper = function Stepper(_ref) {
  var className = _ref.className,
      items = _ref.items,
      summary = _ref.summary;
  return /*#__PURE__*/React.createElement(StyledStepper, null, /*#__PURE__*/React.createElement("ul", null, items.map(function (item) {
    return item.active !== false && /*#__PURE__*/React.createElement(StepperItem, {
      item: item,
      key: item.id
    });
  })), summary && /*#__PURE__*/React.createElement(StepperSummary, {
    summary: summary
  }));
};
Stepper.displayName = "Stepper";
var StyledStepper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  > ul {\n    list-style: none;\n    margin: 0 0.5rem 1rem;\n    padding: 0;\n  }\n"])));
Stepper.propTypes = {
  className: string,
  items: oneOfType([array, func]).isRequired,
  summary: oneOfType([array, func])
};
//# sourceMappingURL=stepper.js.map