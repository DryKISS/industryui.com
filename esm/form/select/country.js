import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Country
 */
// React
import React from 'react';
import { func, object, string } from 'prop-types'; // UI

import { SelectField } from '../'; // Data

import { COUNTRY } from '../../constants';
export var SelectCountryField = function SelectCountryField(_ref) {
  var errors = _ref.errors,
      name = _ref.name,
      register = _ref.register,
      props = _objectWithoutProperties(_ref, ["errors", "name", "register"]);

  return /*#__PURE__*/React.createElement(SelectField, _extends({
    errors: errors,
    name: name,
    options: COUNTRY,
    register: register
  }, props));
};
SelectCountryField.displayName = "SelectCountryField";
SelectCountryField.propTypes = {
  errors: object.isRequired,
  name: string.isRequired,
  register: func.isRequired
};
//# sourceMappingURL=country.js.map