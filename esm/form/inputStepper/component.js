import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject;

/**
 * Components - Form - InputStepper
 */
// React
import React, { forwardRef } from 'react'; // Style

import styled from 'styled-components'; // UI

import { Button } from '../../atoms/button/button/button';
import { InputGroup } from '../inputGroup/group';
import { InputGroupAddon } from '../inputGroup/addon';
import { FormField } from '../field/input'; // Props

import { defaultProps, propTypes } from './props';
export var InputStepperComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var buttonContext = _ref.buttonContext,
      buttonProps = _ref.buttonProps,
      className = _ref.className,
      errors = _ref.errors,
      fullWidth = _ref.fullWidth,
      inputProps = _ref.inputProps,
      onChange = _ref.onChange,
      name = _ref.name,
      style = _ref.style,
      value = _ref.value,
      valueAlign = _ref.valueAlign;

  var handleChange = function handleChange(type) {
    var currentVal = Number(value);
    var newVal = currentVal;

    if (type === 'add') {
      if (inputProps.max === undefined || inputProps.max !== undefined && currentVal < inputProps.max) {
        newVal += 1;
      }
    } else if (type === 'sub') {
      if (inputProps.min === undefined || inputProps.min !== undefined && currentVal > inputProps.min) {
        newVal -= 1;
      }
    } else {
      newVal = Number(type.target.value);
    }

    onChange(newVal);
  };

  return /*#__PURE__*/React.createElement(InputGroup, {
    className: className,
    fullWidth: fullWidth,
    style: style
  }, /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    content: "-",
    context: buttonContext,
    size: "sm"
  }, buttonProps, {
    onClick: function onClick() {
      return handleChange('sub');
    }
  }))), /*#__PURE__*/React.createElement(StyledFormField, _extends({}, inputProps, {
    errors: errors,
    name: name,
    onChange: handleChange,
    value: value,
    textAlign: valueAlign,
    type: "number"
  })), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    content: "+",
    context: buttonContext,
    size: "sm"
  }, buttonProps, {
    onClick: function onClick() {
      return handleChange('add');
    }
  }))));
});
var StyledFormField = styled(FormField)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* Chrome, Safari, Edge, Opera */\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  &[type='number'] {\n    appearance: textfield;\n  }\n"])));
InputStepperComponent.propTypes = propTypes;
InputStepperComponent.defaultProps = defaultProps;
//# sourceMappingURL=component.js.map