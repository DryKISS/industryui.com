import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Messaging/Search
 */
// React
import React from 'react';
import { func, string } from 'prop-types'; // React Hook Form

import { useForm } from 'react-hook-form'; // UI

import { Column, Form, Row, Search, SelectField } from '../../../..'; // Style

import styled from 'styled-components';
var Items = [{
  text: 'All',
  value: 'all'
}, {
  text: 'Email',
  value: 'email'
}, {
  text: 'Comment',
  value: 'comment'
}, {
  text: 'Notification',
  value: 'notification'
}];
export var MessagingSearch = function MessagingSearch(_ref) {
  var onFilter = _ref.onFilter,
      onSearch = _ref.onSearch,
      placeholder = _ref.placeholder;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = function onSubmit(data) {
    onSearch(data.query);
  };

  var onFilterChange = function onFilterChange(e) {
    onFilter && onFilter(e.target.value);
  };

  var defaultOptions = {
    errors: errors,
    register: register
  };
  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(Form, {
    handleSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    md: 6
  }, /*#__PURE__*/React.createElement(StyledSearch, _extends({}, defaultOptions, {
    prependSearchIcon: true,
    placeholder: placeholder
  }))), /*#__PURE__*/React.createElement(Column, {
    md: 6
  }, /*#__PURE__*/React.createElement(StyledSelect, _extends({}, defaultOptions, {
    name: "messagingFilter",
    onChange: onFilterChange,
    options: Items
  }))))));
};
MessagingSearch.displayName = "MessagingSearch";
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-top: 1px solid #c0c0c0;\n  padding: 1rem;\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.headerBackground;
});
var StyledSearch = styled(Search)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 75%;\n"])));
var StyledSelect = styled(SelectField)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 75%;\n  label {\n    margin: 0;\n  }\n"])));
MessagingSearch.propTypes = {
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  placeholder: string
};
MessagingSearch.defaultProps = {
  placeholder: 'Search...'
};
//# sourceMappingURL=index.js.map