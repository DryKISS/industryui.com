import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

/**
 * Components - Form - Style
 */
// Style
import { css } from 'styled-components'; // UI

import { THEME_SIZE } from '../../theme/constants/size';
export var formStyle = function formStyle(_ref) {
  var disabled = _ref.disabled,
      errors = _ref.errors,
      isTyping = _ref.isTyping,
      readOnly = _ref.readOnly,
      Required = _ref.Required,
      size = _ref.size,
      textAlign = _ref.textAlign,
      theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-clip: padding-box;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    box-sizing: border-box;\n    color: ", ";\n    display: block;\n\n    ", "\n    ", "\n    ", "\n\n    outline: none;\n    padding: 0 0.725rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    width: 100%;\n    &:hover {\n      border-color: ", ";\n    }\n\n    &:focus {\n      border-color: ", ";\n    }\n\n    ::placeholder {\n      color: ", ";\n      opacity: 1;\n    }\n    ", "\n\n    ", "\n\n      ", "\n  "])), theme.COLOUR.white, theme.COLOUR.grey80, theme.FORM_ELEMENTS_STYLES.inputBorderRadius, theme.COLOUR.dark, formfontSize(size), Required && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-right-width: 0.25rem;\n    "]))), isTyping === true && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      box-shadow: 0px 0px 4px ", ";\n    "])), theme.COLOUR.fadeBlue), !disabled && !readOnly && theme.COLOUR.lightBlue, function () {
    if (!readOnly) {
      return errors ? theme.COLOUR.danger : theme.COLOUR.primary;
    } else {
      return theme ? theme.COLOUR.dark : theme.COLOUR.light;
    }
  }(), theme ? theme.COLOUR.grey80 : '#cccccc', disabled && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background: ", ";\n      cursor: not-allowed;\n      border-color: ", ";\n    "])), theme.COLOUR.grey, function (_ref2) {
    var theme = _ref2.theme;
    return theme ? theme.COLOUR.dark : theme.COLOUR.light;
  }), readOnly && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-color: ", ";\n      border-width: 1px;\n      padding: 0.5rem;\n    "])), function (_ref3) {
    var theme = _ref3.theme;
    return theme ? theme.COLOUR.light : 'rgb(241,241,241)';
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme ? theme.COLOUR.dark : '#cccccc';
  }), textAlign && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      text-align: ", ";\n    "])), textAlign));
};
export var formErrorStyle = function formErrorStyle(_ref5) {
  var theme = _ref5.theme,
      isTyping = _ref5.isTyping,
      withAddon = _ref5.withAddon;
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border-color: ", ";\n    border-image: initial;\n    border-style: solid;\n    border-left-width: ", ";\n    &:hover {\n      border-color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n    }\n\n    ", "\n  "])), theme.COLOUR.danger, !withAddon && '0.25rem', !isTyping && theme.COLOUR.danger, theme.COLOUR.danger, isTyping === true && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      box-shadow: 0px 0px 4px ", ";\n    "])), theme.COLOUR.danger));
};
export var formfontSize = function formfontSize(size) {
  switch (size) {
    case THEME_SIZE.SM:
      return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        font-size: 0.625rem;\n      "])));

    case THEME_SIZE.MD:
      return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        font-size: 1rem;\n      "])));

    case THEME_SIZE.LG:
      return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));

    default:
      return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        font-size: 1rem;\n      "])));
  }
};
//# sourceMappingURL=style.js.map