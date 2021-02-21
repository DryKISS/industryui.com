import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Components - Form - Field - Input
 */
// React
import React, { useState } from 'react';
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { FieldHOC } from '../hoc';
import { formStyle, formErrorStyle } from '../variables/style';
import { THEME_SIZE } from '../../theme/constants/size';
export var FormField = function FormField(_ref) {
  var disabled = _ref.disabled,
      errors = _ref.errors,
      helperMessage = _ref.helperMessage,
      name = _ref.name,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      regExp = _ref.regExp,
      register = _ref.register,
      size = _ref.size,
      validate = _ref.validate,
      withAddon = _ref.withAddon,
      props = _objectWithoutProperties(_ref, ["disabled", "errors", "helperMessage", "name", "placeholder", "readOnly", "regExp", "register", "size", "validate", "withAddon"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTyping = _useState2[0],
      setisTyping = _useState2[1];

  return /*#__PURE__*/React.createElement(FieldHOC, _extends({
    "aria-label": name,
    component: StyledInput,
    disabled: disabled,
    helperMessage: helperMessage,
    onKeyDown: function onKeyDown(e) {
      setisTyping(true);
    },
    onBlur: function onBlur() {
      setisTyping(false);
    },
    errors: errors[name],
    isTyping: isTyping,
    key: name,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    register: register,
    size: size,
    withAddon: withAddon
  }, props));
};
FormField.displayName = "FormField";
export var StyledInput = styled.input.attrs(function (props) {
  return {
    autoComplete: 'off',
    autoFocus: false
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n    ", "\n"])), function (props) {
  return formStyle(props);
}, function (_ref2) {
  var errors = _ref2.errors;
  return errors && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    return formErrorStyle(props);
  });
}, function (_ref3) {
  var size = _ref3.size;

  switch (size) {
    case THEME_SIZE.SM:
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          height: 1.5rem;\n        "])));

    case THEME_SIZE.MD:
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          height: 1.875rem;\n        "])));

    case THEME_SIZE.LG:
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          height: 2.25rem;\n        "])));

    default:
      return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          height: 2.25rem;\n        "])));
  }
});
FormField.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, string]),
  autoFocus: bool,
  disabled: bool,
  errors: object.isRequired,
  helperMessage: string,
  label: string,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func.isRequired,
  size: oneOf([THEME_SIZE.SM, THEME_SIZE.MD, THEME_SIZE.LG]),
  style: object,
  textAlign: string,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
};
FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  errors: {},
  readOnly: false,
  type: 'text'
};
//# sourceMappingURL=input.js.map