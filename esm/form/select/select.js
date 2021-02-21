import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Select
 */
// React
import React, { forwardRef } from 'react';
import { array, bool, object, string } from 'prop-types'; // Lodash

import _range from 'lodash/range'; // Style

import styled, { css } from 'styled-components'; // UI

import { FieldHOC } from '../hoc';
import { formErrorStyle, formStyle } from '../variables/style';
import { THEME_SIZE } from '../../theme/constants/size';
export var SelectField = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var data = _ref.data,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      errors = _ref.errors,
      name = _ref.name,
      options = _ref.options,
      placeholder = _ref.placeholder,
      range = _ref.range,
      showError = _ref.showError,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["data", "defaultValue", "disabled", "errors", "name", "options", "placeholder", "range", "showError", "size"]);

  var renderRange = function renderRange() {
    var options = [/*#__PURE__*/React.createElement("option", {
      disabled: true,
      value: "",
      key: "initial0"
    }, placeholder)];

    _range(range[1], range[0]).map(function (i) {
      return options.push( /*#__PURE__*/React.createElement("option", {
        key: "range".concat(i),
        value: i
      }, i));
    });

    return options;
  };

  var renderOptions = function renderOptions(items) {
    if (items) {
      options = items;
    }

    return options.map(function (_ref2) {
      var disabled = _ref2.disabled,
          group = _ref2.group,
          items = _ref2.items,
          text = _ref2.text,
          value = _ref2.value;

      if (group) {
        return /*#__PURE__*/React.createElement("optgroup", {
          key: "option".concat(group),
          label: group
        }, renderOptions(items));
      }

      return /*#__PURE__*/React.createElement("option", {
        children: text,
        disabled: disabled,
        key: "option".concat(value),
        value: value
      });
    });
  };

  return /*#__PURE__*/React.createElement(FieldHOC, _extends({
    component: StyledSelect,
    defaultValue: defaultValue,
    disabled: disabled,
    errors: errors[name],
    name: name,
    ref: ref,
    showError: showError,
    size: size
  }, data, props), range && range.length > 0 && renderRange(), options && renderOptions());
});
var StyledSelect = styled.select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return formStyle(props);
}, function (_ref3) {
  var size = _ref3.size;

  switch (size) {
    case THEME_SIZE.SM:
      return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          height: 1.5rem;\n          font-size: 0.625rem;\n        "])));

    case THEME_SIZE.MD:
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          height: 1.875rem;\n        "])));

    case THEME_SIZE.LG:
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          height: 2.25rem;\n        "])));

    default:
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          height: 2.25rem;\n        "])));
  }
}, function (_ref4) {
  var errors = _ref4.errors;
  return errors && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    return formErrorStyle(props);
  });
});
SelectField.propTypes = {
  data: object,
  defaultValue: string,
  disabled: bool,
  errors: object,
  name: string,
  options: array,
  placeholder: string,
  range: array,
  showError: bool
};
SelectField.defaultProps = {
  defaultValue: '',
  disabled: false,
  range: [],
  showError: false
};
//# sourceMappingURL=select.js.map