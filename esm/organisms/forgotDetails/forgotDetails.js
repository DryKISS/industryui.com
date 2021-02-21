import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject;

/**
 * Forgot Details
 */
// React
import React from 'react';
import { bool, func, string } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // Yup

import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotDetailsSchema } from './schema'; // UI

import { Button, Form, FormField, FormLabel, Link, PageHeading } from '../../'; // Style

import styled from 'styled-components';
export var ForgotDetails = function ForgotDetails(_ref) {
  var pathLogIn = _ref.pathLogIn,
      showPlaceholder = _ref.showPlaceholder,
      submit = _ref.submit;

  var _useForm = useForm({
    resolver: yupResolver(ForgotDetailsSchema)
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var defaultOptions = {
    errors: errors,
    register: register
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeading, {
    center: true,
    divider: false,
    heading: "Forgot Details"
  }), /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(submit)
  }, /*#__PURE__*/React.createElement(FormLabel, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : ''
  }))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    content: "Send reset link",
    size: "lg",
    type: "submit"
  }), /*#__PURE__*/React.createElement(Link, {
    to: pathLogIn,
    passHref: true
  }, /*#__PURE__*/React.createElement(StyledLink, null, "Back to Log In"))));
};
var StyledLink = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  margin: 1rem 0 0 0;\n"])));
ForgotDetails.propTypes = {
  pathLogIn: string,
  showPlaceholder: bool,
  submit: func.isRequired
};
ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: false
};
//# sourceMappingURL=forgotDetails.js.map