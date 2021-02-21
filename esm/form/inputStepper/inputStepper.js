import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Components - Form - Input Stepper
 */
// React
import React from 'react'; // RHF

import { Controller } from 'react-hook-form'; // UI

import { InputStepperComponent } from './component'; // Props

import { defaultProps, propTypes } from './props';
export var InputStepper = function InputStepper(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["control", "defaultValue", "name"]);

  return /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(InputStepperComponent, _extends({
      name: name
    }, props)),
    control: control,
    defaultValue: defaultValue,
    name: name
  });
};
InputStepper.displayName = "InputStepper";
InputStepper.propTypes = propTypes;
InputStepper.defaultProps = defaultProps;
//# sourceMappingURL=inputStepper.js.map