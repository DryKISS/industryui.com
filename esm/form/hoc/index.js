import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Components - Form - WrappedComponent
 */
// React
import React from 'react'; // UI

import { FormError, Space, Text } from '../../';
import { THEME_SIZE } from '../../theme/constants/size';
export var FieldHOC = function FieldHOC(_ref) {
  var Component = _ref.component,
      errors = _ref.errors,
      children = _ref.children,
      helperMessage = _ref.helperMessage,
      register = _ref.register,
      show = _ref.show,
      showError = _ref.showError,
      validate = _ref.validate,
      props = _objectWithoutProperties(_ref, ["component", "errors", "children", "helperMessage", "register", "show", "showError", "validate"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Component, _extends({
    "aria-label": props.name,
    errors: errors === null || errors === void 0 ? void 0 : errors.message,
    key: props.name,
    name: props.name,
    ref: register(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
      validate: validate
    }, props.max && {
      max: props.max
    }), props.min && {
      min: props.min
    }), props.maxLength && {
      maxLength: props.maxLength
    }), props.minLength && {
      minLength: props.minLength
    }), props.regExp && {
      pattern: new RegExp(props.regExp)
    })),
    style: _objectSpread({
      display: !show ? 'none' : undefined
    }, props.style)
  }, props), children), helperMessage && /*#__PURE__*/React.createElement(Space, {
    marginTop: THEME_SIZE.SM,
    marginBottom: THEME_SIZE.XS
  }, /*#__PURE__*/React.createElement(Text, {
    size: THEME_SIZE.XS,
    context: "default"
  }, helperMessage)), showError && /*#__PURE__*/React.createElement(FormError, {
    message: (errors === null || errors === void 0 ? void 0 : errors.message) || ''
  }));
};
FieldHOC.defaultProps = {
  errors: {},
  register: function register() {},
  show: true,
  showError: false
};
//# sourceMappingURL=index.js.map