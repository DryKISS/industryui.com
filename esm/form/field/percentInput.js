/**
 * Components - Forms - Precent Input
 */
// React
import React from 'react';
import { bool, func, object, oneOfType, string } from 'prop-types'; // UI

import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../';
export var PercentInput = function PercentInput(_ref) {
  var errors = _ref.errors,
      label = _ref.label,
      name = _ref.name,
      register = _ref.register,
      show = _ref.show,
      symbol = _ref.symbol;
  return /*#__PURE__*/React.createElement(FormLabel, {
    show: show,
    label: label
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(FormField, {
    errors: errors,
    name: name,
    register: register,
    step: "any",
    type: "number"
  }), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append",
    text: true
  }, symbol)));
};
PercentInput.displayName = "PercentInput";
PercentInput.propTypes = {
  errors: object.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  symbol: oneOfType([object, string])
};
PercentInput.defaultProps = {
  show: true,
  symbol: '%'
};
//# sourceMappingURL=percentInput.js.map