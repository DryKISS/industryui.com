import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Form - DatePicker - Calendar
 */
// React
import React from 'react'; // Date Picker

import ReactDatePicker from 'react-datepicker'; // React Hook Form

import { Controller } from 'react-hook-form'; // UI

import { StyledInput } from '../../../'; // Props

import { DatePickerCalendarPropTypes } from './props'; // Style

import styled from 'styled-components';
export var DatePickerCalendar = function DatePickerCalendar(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      errors = _ref.errors,
      name = _ref.name,
      placeholder = _ref.placeholder,
      parentProps = _objectWithoutProperties(_ref, ["control", "defaultValue", "errors", "name", "placeholder"]);

  return /*#__PURE__*/React.createElement(StyleSpan, null, /*#__PURE__*/React.createElement(Controller, {
    render: function render(props) {
      return /*#__PURE__*/React.createElement(ReactDatePicker, _extends({
        customInput: /*#__PURE__*/React.createElement(StyledInput, {
          errors: errors[name]
        }),
        selected: props.value
      }, props, parentProps, {
        placeholderText: placeholder !== null && placeholder !== void 0 ? placeholder : 'Click to select time',
        wrapperClassName: "datePicker"
      }));
    },
    control: control,
    defaultValue: defaultValue,
    name: name
  }));
};
DatePickerCalendar.displayName = "DatePickerCalendar";
var StyleSpan = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .datePicker {\n    width: 100%;\n  }\n"])));
DatePickerCalendar.propTypes = DatePickerCalendarPropTypes;
DatePickerCalendar.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'scroll',
  isClearable: true,
  minDate: new Date(),
  name: 'expiryAt',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
};
//# sourceMappingURL=calendar.js.map