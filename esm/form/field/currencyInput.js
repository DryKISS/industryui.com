import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Components - Forms - Currency Input
 */
// React
import React from 'react';
import { bool, func, number, object, oneOfType, node, string } from 'prop-types'; // UI

import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../';
export var CurrencyInput = function CurrencyInput(_ref) {
  var children = _ref.children,
      currencySymbol = _ref.currencySymbol,
      errors = _ref.errors,
      label = _ref.label,
      min = _ref.min,
      name = _ref.name,
      register = _ref.register,
      show = _ref.show,
      style = _ref.style,
      size = _ref.size,
      vat = _ref.vat;
  var defaultOptions = {
    error: errors[name]
  };
  return /*#__PURE__*/React.createElement(FormLabel, {
    show: show,
    label: label
  }, /*#__PURE__*/React.createElement(InputGroup, defaultOptions, /*#__PURE__*/React.createElement(InputGroupAddon, _extends({}, defaultOptions, {
    addonType: "prepend",
    size: size,
    text: true
  }), currencySymbol), /*#__PURE__*/React.createElement(FormField, {
    errors: errors,
    min: min,
    name: name,
    register: register,
    style: style,
    size: size,
    step: "any",
    type: "number"
  }), vat && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputGroupAddon, _extends({}, defaultOptions, {
    addonType: "append",
    size: size,
    text: true
  }), vat), children)));
};
CurrencyInput.displayName = "CurrencyInput";
CurrencyInput.propTypes = {
  children: node,
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  min: number,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  style: node,
  size: string,
  vat: oneOfType([string, bool])
};
CurrencyInput.defaultProps = {
  currencySymbol: '£',
  min: 0,
  show: true,
  size: 'md',
  vat: 'Incl VAT'
};
//# sourceMappingURL=currencyInput.js.map