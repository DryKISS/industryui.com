import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Components - Organisms - Password Change
 */
// React
import React, { useState } from 'react';
import { bool, func } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // Yup

import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordChangeSchema as schema } from './schema'; // UI

import { Alert } from '../../molecules/alert/components/alert';
import { Button } from '../../atoms/button/button/button';
import { Form } from '../../form/form/form';
import { FormField } from '../../form/field/input';
import { FormLabel } from '../../form/label/label';
import { PageHeading } from '../../molecules/pageHeading/pageHeading';
export var PasswordChange = function PasswordChange(_ref) {
  var showPlaceholder = _ref.showPlaceholder,
      submit = _ref.submit;

  var _useForm = useForm({
    resolver: yupResolver(schema)
  }),
      errors = _useForm.errors,
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      watch = _useForm.watch;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 1),
      error = _useState2[0];

  var defaultOptions = {
    errors: errors,
    register: register,
    type: 'password'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeading, {
    center: true,
    heading: "Password Change",
    divider: false
  }), error && /*#__PURE__*/React.createElement(Alert, {
    content: error.message,
    context: "warning"
  }), /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(submit)
  }, /*#__PURE__*/React.createElement(FormLabel, {
    label: "Old password"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "passwordOld",
    placeholder: showPlaceholder ? 'Old Password' : ''
  }))), /*#__PURE__*/React.createElement(FormLabel, {
    label: "New password"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "password",
    placeholder: showPlaceholder ? 'New Password' : ''
  }))), /*#__PURE__*/React.createElement(FormLabel, {
    label: "Confirm password"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "passwordConfirm",
    placeholder: showPlaceholder ? 'Confirm Password' : '',
    validate: function validate(v) {
      return v === watch('password');
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    content: "Submit",
    context: "primary",
    disabled: formState.isSubmitting,
    type: "submit"
  })));
};
PasswordChange.propTypes = {
  showPlaceholder: bool,
  submit: func.isRequired
};
PasswordChange.defaultProps = {
  showPlaceholder: false
};
//# sourceMappingURL=passwordChange.js.map