import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Organisms - Email Change
 */
// React
import React, { useState } from 'react';
import { bool, func } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // Yup

import { yupResolver } from '@hookform/resolvers/yup';
import { EmailChangeSchema as schema } from './schema'; // UI

import { Alert, Button, FormField, Form, FormLabel, PageHeading, Space, Text } from '../../';
export var EmailChange = function EmailChange(_ref) {
  var showPlaceholder = _ref.showPlaceholder,
      submit = _ref.submit;

  var _useForm = useForm({
    resolver: yupResolver(schema)
  }),
      errors = _useForm.errors,
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 1),
      error = _useState2[0];

  var defaultOptions = {
    errors: errors,
    register: register
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeading, {
    center: true,
    heading: "Email Change",
    divider: false
  }), error && /*#__PURE__*/React.createElement(Alert, {
    content: error.message,
    context: "warning"
  }), /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(submit)
  }, /*#__PURE__*/React.createElement(FormLabel, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "email",
    placeholder: showPlaceholder && 'Email'
  }))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    content: "Submit",
    context: "primary",
    disabled: formState.isSubmitting,
    type: "submit"
  }), /*#__PURE__*/React.createElement(Space, null), /*#__PURE__*/React.createElement(Text, null, "We will send you a re-validation email after this. Please also check your spam folder.")));
};
EmailChange.propTypes = {
  showPlaceholder: bool,
  submit: func.isRequired
};
EmailChange.defaultProps = {
  showPlaceholder: false
};
//# sourceMappingURL=emailChange.js.map