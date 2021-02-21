/**
 * Search
 */
// React
import React from 'react';
import { bool, func, object, string, oneOf } from 'prop-types'; // UI

import { Button, FormField, Icon, InputGroup, InputGroupAddon } from '../../';
export var Search = function Search(_ref) {
  var appendSearchButton = _ref.appendSearchButton,
      appendSearchIcon = _ref.appendSearchIcon,
      errors = _ref.errors,
      label = _ref.label,
      placeholder = _ref.placeholder,
      prependSearchIcon = _ref.prependSearchIcon,
      prefix = _ref.prefix,
      register = _ref.register,
      type = _ref.type;
  return /*#__PURE__*/React.createElement(InputGroup, null, prependSearchIcon && /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend",
    text: true
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "sm",
    icon: "search",
    prefix: prefix
  })), /*#__PURE__*/React.createElement(FormField, {
    errors: errors,
    name: "query",
    placeholder: placeholder,
    register: register,
    type: type
  }), appendSearchIcon && /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append",
    text: true
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "search",
    size: "sm",
    prefix: prefix
  })), appendSearchButton && /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append"
  }, /*#__PURE__*/React.createElement(Button, {
    content: label || 'Search',
    context: "dark",
    size: "sm",
    type: "submit"
  })));
};
Search.displayName = "Search";
Search.propTypes = {
  appendSearchButton: bool,
  appendSearchIcon: bool,
  errors: object.isRequired,
  label: string,
  placeholder: string,
  prependSearchIcon: bool,
  register: func.isRequired,
  type: oneOf(['search', 'text'])
};
Search.defaultProps = {
  appendSearchButton: false,
  appendSearchIcon: false,
  prependSearchIcon: false,
  type: 'search'
};
//# sourceMappingURL=search.js.map