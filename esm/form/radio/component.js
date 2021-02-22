import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Radio
 */
// React
import React, { forwardRef } from 'react';
import { bool } from 'prop-types'; // Style

import styled from 'styled-components';
export var RadioComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["disabled"]);

  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    disabled: disabled,
    type: "radio",
    ref: ref
  }, props));
});
var StyledInput = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-right: 0.5rem;\n"])));
RadioComponent.propTypes = {
  disabled: bool
};
RadioComponent.defaultProps = {
  stacked: false
};
//# sourceMappingURL=component.js.map