import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Form - Checkbox
 */
// React
import React from 'react';
import { array, bool, object, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { FieldHOC } from '../hoc';
import { CheckboxComponent } from './component';
import { formErrorStyle } from '../variables/style';
export var CheckboxField = function CheckboxField(_ref) {
  var data = _ref.data,
      errors = _ref.errors,
      legend = _ref.legend,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ["data", "errors", "legend", "stacked"]);

  return /*#__PURE__*/React.createElement(StyledFieldset, {
    error: errors[props.name]
  }, legend && /*#__PURE__*/React.createElement("legend", null, legend), data.map(function (_ref2) {
    var disabled = _ref2.disabled,
        label = _ref2.label,
        data = _objectWithoutProperties(_ref2, ["disabled", "label"]);

    return /*#__PURE__*/React.createElement(StyledLabel, {
      htmlFor: data.id,
      key: data.id,
      stacked: stacked
    }, /*#__PURE__*/React.createElement(FieldHOC, _extends({
      component: CheckboxComponent,
      disabled: disabled,
      errors: errors[props.name],
      showError: false
    }, data, props)), label);
  }));
};
CheckboxField.displayName = "CheckboxField";
var StyledFieldset = styled.fieldset(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 0.25rem;\n  ", "\n"])), function (_ref3) {
  var error = _ref3.error;
  return error && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n      padding: 0.5rem;\n    "])), function (props) {
    return formErrorStyle(props);
  });
});
var StyledLabel = styled.label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-right: 1.25rem;\n  position: relative;\n  ", "\n"])), function (_ref4) {
  var stacked = _ref4.stacked;
  return stacked && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      display: block;\n      margin: 0.5rem 0;\n    "])));
});
CheckboxField.propTypes = {
  data: array.isRequired,
  errors: object,
  legend: string,
  stacked: bool
};
CheckboxField.defaultProps = {
  data: [],
  errors: {},
  stacked: false
};
//# sourceMappingURL=checkbox.js.map