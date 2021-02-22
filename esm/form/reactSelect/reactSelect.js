import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Form - React Select
 */
// React
import React, { forwardRef } from 'react'; // React Select

import Select from 'react-select';
import AsyncSelect from 'react-select/async'; // React Hook Form

import { Controller } from 'react-hook-form'; // Style

import styled, { css } from 'styled-components'; // UI

import { defaultStyles } from './styles';
import { formErrorStyle, formStyle } from '../variables/style';
import { THEME_SIZE } from '../../theme/constants/size'; // Props

import { defaultProps, propTypes } from './props';
export var ReactSelectField = function ReactSelectField(_ref) {
  var async = _ref.async,
      cacheOptions = _ref.cacheOptions,
      control = _ref.control,
      defaultOptions = _ref.defaultOptions,
      defaultValue = _ref.defaultValue,
      error = _ref.error,
      errors = _ref.errors,
      loadOptions = _ref.loadOptions,
      name = _ref.name,
      options = _ref.options,
      selectedOption = _ref.selectedOption,
      size = _ref.size,
      parentProps = _objectWithoutProperties(_ref, ["async", "cacheOptions", "control", "defaultOptions", "defaultValue", "error", "errors", "loadOptions", "name", "options", "selectedOption", "size"]);

  var Component = /*#__PURE__*/forwardRef(function (data, ref) {
    if (async) {
      return /*#__PURE__*/React.createElement(AsyncSelect, _extends({
        cacheOptions: cacheOptions,
        defaultOptions: defaultOptions,
        loadOptions: loadOptions,
        ref: ref
      }, data));
    } else {
      return /*#__PURE__*/React.createElement(Select, _extends({
        ref: ref
      }, data));
    }
  });
  return /*#__PURE__*/React.createElement(Wrapper, {
    size: size,
    error: error || errors[name]
  }, /*#__PURE__*/React.createElement(Controller, {
    control: control,
    defaultValue: defaultValue,
    name: name,
    render: function render(props) {
      return /*#__PURE__*/React.createElement(Component, _extends({
        options: options,
        selectedOption: props.value
      }, props, parentProps));
    }
  }));
};
ReactSelectField.displayName = "ReactSelectField";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & > div:first-of-type > div:first-of-type {\n    ", "\n    display:flex;\n    padding: 0;\n    color: ", ";\n    ", "\n  }\n\n  ", "\n\n  div[class$='menu'] {\n    box-shadow: none;\n    border: 1px solid\n      ", ";\n  }\n\n  div[class$='option'] {\n    font-size: ", ";\n  }\n"])), function (props) {
  return formStyle(props);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.dark;
}, function (_ref3) {
  var size = _ref3.size;

  switch (size) {
    case THEME_SIZE.SM:
      return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            height: 1.5rem;\n          "])));

    case THEME_SIZE.MD:
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            height: 1.875rem;\n          "])));

    case THEME_SIZE.LG:
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            height: 2.25rem !important;\n          "])));

    default:
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            height: 2.25rem !important;\n          "])));
  }
}, function (_ref4) {
  var error = _ref4.error;
  return error && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      ._,\n      & > div:first-of-type > div:first-of-type {\n        ", "\n      }\n    "])), function (props) {
    return formErrorStyle(props);
  });
}, function (_ref5) {
  var theme = _ref5.theme;
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          ", "\n        "])), theme.SELECT.MENU_BORDER_COLOUR);
}, function (_ref6) {
  var theme = _ref6.theme,
      size = _ref6.size;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        ", "\n      "])), theme.SELECT.FONT_SIZE[size]);
});
ReactSelectField.propTypes = propTypes;
ReactSelectField.defaultProps = defaultProps(defaultStyles);
//# sourceMappingURL=reactSelect.js.map