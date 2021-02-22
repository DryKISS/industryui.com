import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Date Picker - Input
 */
// React
import React from 'react';
import { bool, func, number, object, string } from 'prop-types'; // UI

import { Column, Row, SelectField } from '../../../';
import { Space } from '../../../atoms/space/space'; // Data

import { DAYS, MONTHS } from './constants/dates';
export var DatePickerInput = function DatePickerInput(_ref) {
  var data = _ref.data,
      errors = _ref.errors,
      index = _ref.index,
      label = _ref.label,
      name = _ref.name,
      placeHolder = _ref.placeHolder,
      register = _ref.register,
      showDay = _ref.showDay,
      showMonth = _ref.showMonth,
      showYear = _ref.showYear,
      yearEnd = _ref.yearEnd,
      yearStart = _ref.yearStart;
  var defaultOptions = {
    errors: errors,
    register: register
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, {
    marginBottom: "xs"
  }, label), /*#__PURE__*/React.createElement(Row, null, showDay && /*#__PURE__*/React.createElement(Column, {
    md: 4
  }, /*#__PURE__*/React.createElement(SelectField, _extends({}, defaultOptions, {
    data: {
      'data-index': index,
      'data-name': 'day'
    },
    name: "day".concat(name),
    options: DAYS
  }))), showMonth && /*#__PURE__*/React.createElement(Column, {
    md: 4
  }, /*#__PURE__*/React.createElement(SelectField, _extends({}, defaultOptions, {
    data: {
      'data-index': index,
      'data-name': 'month'
    },
    name: "month".concat(name),
    options: _toConsumableArray(MONTHS)
  }))), showYear && /*#__PURE__*/React.createElement(Column, {
    md: 4
  }, /*#__PURE__*/React.createElement(SelectField, _extends({}, defaultOptions, {
    data: {
      'data-index': index,
      'data-name': 'year'
    },
    name: "year".concat(name),
    placeholder: "Select year",
    range: [yearStart, yearEnd]
  })))));
};
DatePickerInput.propTypes = {
  data: object,
  errors: object.isRequired,
  index: number,
  label: string,
  name: string,
  register: func.isRequired,
  showDay: bool,
  showMonth: bool,
  showYear: bool,
  yearEnd: number,
  yearStart: number
};
DatePickerInput.defaultProps = {
  day: true,
  index: 1,
  month: true,
  showDay: true,
  showMonth: true,
  showYear: true,
  year: true,
  yearEnd: 2020,
  yearStart: 1920
};
//# sourceMappingURL=datePickerInput.js.map