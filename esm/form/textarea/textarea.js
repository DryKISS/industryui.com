import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Textarea
 */
// React
import React from 'react';
import { any, bool, func, number, object, oneOf, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { FieldHOC } from '../hoc';
import { formErrorStyle, formStyle } from '../variables/style';
import { THEME_SIZE } from '../../theme/constants/size';
export var TextareaField = function TextareaField(_ref) {
  var autoFocus = _ref.autoFocus,
      className = _ref.className,
      cols = _ref.cols,
      dir = _ref.dir,
      disabled = _ref.disabled,
      errors = _ref.errors,
      maxLength = _ref.maxLength,
      name = _ref.name,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      register = _ref.register,
      rows = _ref.rows,
      size = _ref.size,
      spellCheck = _ref.spellCheck,
      tabIndex = _ref.tabIndex,
      wrap = _ref.wrap;
  return /*#__PURE__*/React.createElement(FieldHOC, {
    autoFocus: autoFocus,
    className: className,
    cols: cols,
    component: StyledTextarea,
    dir: dir,
    disabled: disabled,
    errors: errors[name],
    maxLength: maxLength,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    register: register,
    rows: rows,
    size: size,
    spellcheck: spellCheck,
    tabIndex: tabIndex,
    wrap: wrap
  });
};
TextareaField.displayName = "TextareaField";
var StyledTextarea = styled.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  direction: ", ";\n  display: block;\n  line-height: 1.25rem;\n  ", "\n\n  ", "\n    padding: 0.5rem 0.725rem;\n"])), function (props) {
  return formStyle(props);
}, function (_ref2) {
  var dir = _ref2.dir;
  return dir;
}, function (_ref3) {
  var errors = _ref3.errors;
  return errors && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    return formErrorStyle(props);
  });
}, function (_ref4) {
  var size = _ref4.size;
  return size === THEME_SIZE.SM && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      font-size: 0.625rem;\n    "])));
});
TextareaField.propTypes = {
  autoFocus: bool,
  className: any,
  cols: number,
  dir: oneOf(['ltr', 'rtl']),
  disabled: bool,
  errors: object.isRequired,
  maxLength: number,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func.isRequired,
  rows: number,
  size: oneOf(Object.values(THEME_SIZE)),
  spellCheck: bool,
  tabIndex: number,
  wrap: oneOf(['soft', 'hard'])
};
TextareaField.defaultProps = {
  autoFocus: false,
  dir: 'ltr',
  rows: 5,
  size: 'md'
};
//# sourceMappingURL=textarea.js.map