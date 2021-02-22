import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Register
 */
// React
import React, { useContext, useState, useEffect } from 'react';
import { any, bool, func, string } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // UI

import { Alert, Button, CheckboxField, DatePickerInput, Form, FormLabel, FormField, Link, Text, UserContext } from '../../'; // Style

import styled from 'styled-components';
var CHECKBOX_TERMS = [{
  id: 'terms',
  label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.'
}, {
  id: 'marketing',
  label: "I would like to receive, occasional news and exclusive offers from via email. I can opt\n      out of receiving these at any time in my account settings."
}];
export var Register = function Register(_ref) {
  var birthday = _ref.birthday,
      dayBirthday = _ref.dayBirthday,
      email = _ref.email,
      errorSubmit = _ref.errorSubmit,
      monthBirthday = _ref.monthBirthday,
      marketing = _ref.marketing,
      nameFirst = _ref.nameFirst,
      nameLast = _ref.nameLast,
      pathLogin = _ref.pathLogin,
      password = _ref.password,
      repeatPassword = _ref.repeatPassword,
      showPlaceholder = _ref.showPlaceholder,
      submit = _ref.submit,
      terms = _ref.terms,
      yearBirthday = _ref.yearBirthday;

  var renderBirthday = function renderBirthday() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DatePickerInput, {
      day: dayBirthday,
      id: "Birthday",
      label: "Birthdate",
      month: monthBirthday,
      year: yearBirthday
    }), /*#__PURE__*/React.createElement(Text, null, "To sign up, you must be 18 or older. Other users will not see this."));
  };

  var _useContext = useContext(UserContext),
      registerContext = _useContext.registerContext;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      register = _useForm.register,
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit;

  var _useState = useState(errorSubmit),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordError = _useState4[0],
      setPasswordError = _useState4[1];

  useEffect(function () {
    setError(errorSubmit);
    return function () {
      setError();
    };
  }, [errorSubmit]);

  var onSubmit = function onSubmit(e) {
    setPasswordError();

    if (e.password !== e.repeatPassword) {
      setPasswordError(new Error('Password and repeat password are different'));
    } else if (!submit) {
      registerContext(nameFirst, nameLast, email, password, marketing, birthday, function (error) {
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
  return /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(onSubmit)
  }, error && /*#__PURE__*/React.createElement(Alert, {
    content: error.message,
    context: "warning"
  }), /*#__PURE__*/React.createElement(FormLabel, {
    label: "First name"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "nameFirst",
    placeholder: showPlaceholder ? 'Tommy' : ''
  }))), /*#__PURE__*/React.createElement(FormLabel, {
    label: "Last name"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "nameLast",
    placeholder: showPlaceholder ? 'Ryder' : ''
  }))), /*#__PURE__*/React.createElement(FormLabel, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : ''
  }))), /*#__PURE__*/React.createElement(FormLabel, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "password",
    placeholder: showPlaceholder ? 'Password' : '',
    type: "password"
  }))), /*#__PURE__*/React.createElement(FormLabel, {
    label: "Repeat Password"
  }, /*#__PURE__*/React.createElement(FormField, _extends({}, defaultOptions, {
    name: "repeatPassword",
    placeholder: showPlaceholder ? 'Password' : '',
    type: "password"
  }))), birthday && renderBirthday(), passwordError && /*#__PURE__*/React.createElement(Alert, {
    content: passwordError.message,
    context: "warning"
  }), /*#__PURE__*/React.createElement(CheckboxField, _extends({}, defaultOptions, {
    data: CHECKBOX_TERMS,
    stacked: true
  })), /*#__PURE__*/React.createElement(Button, {
    align: "right",
    content: "Sign up",
    context: "primary",
    disabled: !formState.isValid,
    size: "lg",
    type: "submit"
  }), /*#__PURE__*/React.createElement(StyledLink, null, "Already have an account? ", /*#__PURE__*/React.createElement(Link, {
    to: pathLogin
  }, "Log in")));
};
Register.displayName = "Register";
var StyledLink = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  margin: 1rem 0;\n"])));
Register.propTypes = {
  birthday: bool,
  dayBirthday: any,
  email: string,
  errorSubmit: bool,
  marketing: bool,
  monthBirthday: any,
  nameFirst: string,
  nameLast: string,
  password: string,
  pathLogin: string,
  repeatPassword: string,
  showPlaceholder: bool,
  submit: func.isRequired,
  terms: bool,
  yearBirthday: any
};
Register.defaultProps = {
  birthday: false,
  pathLogin: '/account/login'
};
//# sourceMappingURL=register.js.map