import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2;

/**
 * Components - Organisms - Login
 */
// React
import React, { useContext, useState } from 'react';
import { bool, func, object, oneOfType, string } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // Yup

import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema as schema } from './schema'; // UI

import { Alert, Button, FormField, Form, FormError, FormLabel, Link, PageHeading, Space, Text, UserContext } from '../../'; // Style

import styled from 'styled-components';

var ErrMessage = function ErrMessage(message) {
  return /*#__PURE__*/React.createElement(FormError, {
    message: message
  });
};

ErrMessage.displayName = "ErrMessage";
export var Login = function Login(_ref) {
  var blockSubmitButton = _ref.blockSubmitButton,
      forgotPassword = _ref.forgotPassword,
      heading = _ref.heading,
      showTitle = _ref.showTitle,
      submit = _ref.submit,
      pathForgot = _ref.pathForgot,
      pathSignUp = _ref.pathSignUp,
      remember = _ref.remember,
      showLabel = _ref.showLabel,
      showPassword = _ref.showPassword,
      showPlaceholder = _ref.showPlaceholder;

  var _useForm = useForm({
    resolver: yupResolver(schema)
  }),
      errors = _useForm.errors,
      formState = _useForm.formState,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showPass = _useState4[0],
      setShowPass = _useState4[1];

  var _useContext = useContext(UserContext),
      signIn = _useContext.signIn;

  var onSubmit = function onSubmit(_ref2) {
    var email = _ref2.email,
        password = _ref2.password;

    if (!submit) {
      signIn('email', email, password, function (error) {
        return error && setError(error);
      });
    } else {
      submit();
    }
  };

  var defaultOptions = {
    errors: errors,
    register: register
  };
  return /*#__PURE__*/React.createElement(Wrapper, null, showTitle && /*#__PURE__*/React.createElement(PageHeading, {
    center: true,
    heading: heading,
    divider: false
  }), error && /*#__PURE__*/React.createElement(Alert, {
    content: error.message,
    context: "warning"
  }), /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(FormLabel, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : ''
  })), errors.email && ErrMessage(errors.email.message)), /*#__PURE__*/React.createElement(FormLabel, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "password",
    placeholder: showPlaceholder ? 'Password' : '',
    type: showPass ? 'text' : 'password'
  })), errors.password && ErrMessage(errors.password.message)), showPassword && /*#__PURE__*/React.createElement(ShowPassword, {
    align: "right",
    onClick: function onClick() {
      return setShowPass(function (prev) {
        return !prev;
      });
    }
  }, showPass ? 'Hide Password' : 'Show Password'), /*#__PURE__*/React.createElement(Button, {
    align: "right",
    block: blockSubmitButton,
    content: "Log in",
    context: "primary",
    disabled: formState.isSubmitting,
    size: "lg",
    type: "submit"
  })), forgotPassword && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Link, {
    to: pathForgot
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Space, {
    marginBottom: "md"
  })), pathSignUp && /*#__PURE__*/React.createElement(Text, {
    align: "center"
  }, "Don't have an account? ", /*#__PURE__*/React.createElement(Link, {
    to: pathSignUp
  }, "Apply now!")));
};
Login.displayName = "Login";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 1rem;\n"])), function (_ref3) {
  var LOGIN = _ref3.theme.LOGIN;
  return LOGIN.background;
});
var ShowPassword = styled(Text)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 0.75rem;\n  margin-bottom: 1rem;\n"])));
Login.propTypes = {
  blockSubmitButton: bool,
  forgotPassword: bool,
  heading: string,
  submit: func.isRequired,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string,
  showLabel: bool,
  showPassword: bool,
  showPlaceholder: bool,
  showTitle: bool
};
Login.defaultProps = {
  blockSubmitButton: true,
  forgotPassword: true,
  heading: 'Log In',
  pathForgot: '/account/forgot-details',
  pathSignUp: '/account/sign-in',
  remember: '',
  showLabel: true,
  showPassword: true,
  showPlaceholder: false,
  showTitle: true
};
//# sourceMappingURL=login.js.map