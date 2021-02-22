import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Organisms - Forgot Details Reset
 * Takes a UUID: 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
 */
// React
import React from 'react';
import { func, string } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // Yup

import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotDetailsResetSchema } from './schema'; // UI

import { Alert, Button, FormField, Form, FormLabel, Link, PageHeading } from '../../'; // Style

import styled from 'styled-components';
export var ForgotDetailsReset = function ForgotDetailsReset(_ref) {
  var _errors$password;

  var pathLogIn = _ref.pathLogIn,
      submit = _ref.submit;

  var _useForm = useForm({
    resolver: yupResolver(ForgotDetailsResetSchema)
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeading, {
    center: true,
    heading: "Set New Password",
    divider: false
  }), (errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message) && /*#__PURE__*/React.createElement(Alert, {
    content: errors.password.message,
    context: "warning"
  }), /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(submit)
  }, /*#__PURE__*/React.createElement(FormLabel, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(FormField, {
    errors: errors,
    name: "password",
    register: register,
    type: "password"
  })), /*#__PURE__*/React.createElement(Button, {
    block: true,
    content: "Submit",
    size: "lg",
    type: "submit"
  }), /*#__PURE__*/React.createElement(Link, {
    to: pathLogIn,
    passHref: true
  }, /*#__PURE__*/React.createElement(StyledLink, null, "Back to Log In"))));
};
var StyledLink = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  margin: 1rem 0 0 0;\n"])));
ForgotDetailsReset.propTypes = {
  pathLogIn: string,
  submit: func
};
ForgotDetailsReset.defaultProps = {
  pathLogIn: '/account/sign-in'
};
//# sourceMappingURL=forgotDetailsReset.js.map