import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

/**
 * Input
 */
// React
import React from 'react';
import { func, node, object, oneOf, shape, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { Adornment, arrayOfValues, InputDecorationTypes, Space, Text } from '../../';
import { THEME_COLOUR } from '../../theme/variables/colour';
import { THEME_SIZE } from '../../theme/constants/size';
var colourPlate = {
  dark: THEME_COLOUR.darkText,
  darkBorder: THEME_COLOUR.grey80,
  "default": THEME_COLOUR.grey,
  disabled: THEME_COLOUR.dark,
  readOnly: THEME_COLOUR.grey,
  success: THEME_COLOUR.formSuccess,
  warning: THEME_COLOUR.gold40
};
var inputThemeColourPlate = {
  dark: 'darkText',
  darkBorder: 'grey80',
  "default": 'grey',
  disabled: 'dark',
  readOnly: 'grey',
  success: 'formSuccess',
  warning: 'gold40'
};
export var InputTypes = {
  NUMBER: 'number',
  TEXT: 'text',
  PASSWORD: 'password'
};

var colourProvider = function colourProvider(theme, decoration) {
  if (theme !== null && theme !== void 0 && theme.COLOUR) {
    return theme.COLOUR[inputThemeColourPlate[decoration]];
  } else {
    return colourPlate[decoration];
  }
};

export var Input = function Input(_ref) {
  var _errors$name;

  var adornments = _ref.adornments,
      decoration = _ref.decoration,
      errors = _ref.errors,
      label = _ref.label,
      message = _ref.message,
      name = _ref.name,
      placeholder = _ref.placeholder,
      register = _ref.register,
      size = _ref.size,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["adornments", "decoration", "errors", "label", "message", "name", "placeholder", "register", "size", "type"]);

  return /*#__PURE__*/React.createElement(Wrapper, {
    theme: props.theme,
    decoration: decoration,
    readOnly: props.readOnly
  }, label && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, {
    marginBottom: "xs"
  }, /*#__PURE__*/React.createElement(StyledLabel, {
    theme: props.theme,
    content: label
  }))), /*#__PURE__*/React.createElement(Space, {
    marginBottom: "xs"
  }, /*#__PURE__*/React.createElement(InputWrapper, {
    size: size
  }, (adornments === null || adornments === void 0 ? void 0 : adornments.startAdornment) && /*#__PURE__*/React.createElement(Adornment, {
    startAdornment: true,
    size: size
  }, adornments.startAdornment), /*#__PURE__*/React.createElement(StyledInput, _extends({
    adornments: adornments,
    disabled: props.disabled || decoration === InputDecorationTypes.DISABLED,
    message: message,
    name: name,
    placeholder: placeholder,
    readOnly: props.readOnly || decoration === InputDecorationTypes.READONLY,
    ref: register,
    size: size,
    type: type,
    required: ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.type) === 'required'
  }, props)), (adornments === null || adornments === void 0 ? void 0 : adornments.endAdornment) && /*#__PURE__*/React.createElement(Adornment, {
    size: size
  }, adornments.endAdornment))), message && /*#__PURE__*/React.createElement(StyledMessage, null, message));
};
Input.displayName = "Input";
var StyledLabel = styled(Text)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 0.75rem;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return colourProvider(theme, 'dark');
});
var StyledMessage = styled(Text)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 0.625rem;\n  color: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme,
      decoration = _ref3.decoration;
  return colourProvider(theme, 'disabled');
});
var InputWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  width: 100%;\n  ", "\n"])), function (_ref4) {
  var size = _ref4.size;

  switch (size) {
    case THEME_SIZE.SM:
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          height: 1.5rem;\n          ", " {\n            padding: 0.5rem 1rem;\n          }\n        "])), Adornment);

    case THEME_SIZE.MD:
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          height: 1.875rem;\n          ", " {\n            padding: 0.75rem 1.25rem;\n          }\n        "])), Adornment);

    case THEME_SIZE.LG:
      return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          height: 2.25rem;\n          ", " {\n            padding: 0.875rem 1.625rem;\n          }\n        "])), Adornment);

    default:
      return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          height: 1.875rem;\n          ", " {\n            padding: 0.75rem 1.25rem;\n          }\n        "])), Adornment);
  }
});
var withAdornmentStyles = css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var adornments = _ref5.adornments;
  return adornments && css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        ", "\n        ", "\n      "])), adornments.startAdornment && css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          border-bottom-left-radius: 0;\n          border-top-left-radius: 0;\n        "]))), adornments.endAdornment && css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          border-bottom-right-radius: 0;\n          border-top-right-radius: 0;\n        "]))));
});
var StyledInput = styled.input.attrs(function (props) {
  return {
    'aria-label': props.name,
    autoComplete: 'off',
    autoFocus: false
  };
})(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border: 1px solid;\n  border-left-width: ", ";\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  height: 100%;\n  outline: none;\n  padding: 0 0.625rem;\n  width: 100%;\n\n  &:focus {\n    border-color: ", ";\n  }\n  ::placeholder {\n    color: ", ";\n    opacity: 1;\n  }\n\n  ", "\n"])), function (_ref6) {
  var required = _ref6.required,
      adornments = _ref6.adornments;
  return required === true && !adornments.startAdornment && ' 0.5rem';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme ? theme.COLOUR.primary : '#245EE5';
}, function (_ref8) {
  var theme = _ref8.theme;
  return colourProvider(theme, 'danger');
}, withAdornmentStyles);
var Wrapper = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  ", "\n"])), function (_ref9) {
  var decoration = _ref9.decoration,
      readOnly = _ref9.readOnly,
      theme = _ref9.theme;
  return css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      ", " {\n        color: ", ";\n      }\n\n      ", ",\n      ", " {\n        border-color: ", ";\n        ", "\n      }\n      ", " {\n        background-color: ", ";\n      }\n    "])), StyledMessage, decoration === InputDecorationTypes.DEFAULT || decoration === InputDecorationTypes.WARNING || decoration === InputDecorationTypes.READONLY ? colourProvider(theme, 'dark') : colourProvider(theme, decoration), StyledInput, Adornment, decoration !== InputDecorationTypes.DEFAULT ? colourProvider(theme, decoration) : colourProvider(theme, 'dark'), decoration === InputDecorationTypes.READONLY || readOnly === true && css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n            background: transparent;\n            pointer-events: none;\n          "]))), Adornment, colourProvider(theme, decoration));
});
Input.propTypes = {
  adornments: shape({
    startAdornment: node,
    endAdornment: node
  }),
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  placeholder: string,
  register: func.isRequired,
  type: oneOf(arrayOfValues(InputTypes))
};
Input.defaultProps = {
  decoration: 'default',
  type: InputTypes.TEXT,
  size: THEME_SIZE.MD
};
//# sourceMappingURL=input.js.map