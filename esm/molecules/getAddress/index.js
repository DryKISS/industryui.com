import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Components - Molecules - Get Address
 */
// React
import React, { useContext, useRef, useState } from 'react';
import { func, object, oneOf, number, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { Button, Dropdown, FormError, FormField, FormLabel, GetAddressService, InputGroupAddon, Shimmer, ConfigContext, validatorPostCode } from '../../';
import { THEME_SIZE } from '../../theme/constants/size';
export var GetAddress = function GetAddress(_ref) {
  var errors = _ref.errors,
      label = _ref.label,
      name = _ref.name,
      placeholder = _ref.placeholder,
      register = _ref.register,
      setValue = _ref.setValue,
      size = _ref.size,
      throttle = _ref.throttle,
      validator = _ref.validator;

  var _useContext = useContext(ConfigContext),
      GetAddressConfig = _useContext.GetAddressConfig;

  var _useState = useState(errors !== null && errors !== void 0 ? errors : _defineProperty({}, name, null)),
      _useState2 = _slicedToArray(_useState, 2),
      Errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      IsLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      Addresses = _useState6[0],
      setAddresses = _useState6[1];

  var ref = useRef(null);
  var InputValueRef = useRef('');

  var onApiCall = function onApiCall(data) {
    var response = data.response,
        hasError = data.hasError;

    if (!hasError) {
      var addresses = response.addresses;
      var fixedAddresses = GetAddressService.fixAddresses(addresses);
      setErrors(_defineProperty({}, name, null));
      setAddresses(fixedAddresses);
      ref.current.click();
    } else {
      setErrors(_defineProperty({}, name, {
        message: response
      }));
    }

    setIsLoading(false);
  };

  var handleInputChange = function handleInputChange(value) {
    InputValueRef.current = value;
  };

  var handleSearchClick = function handleSearchClick() {
    var _GetAddressConfig$api;

    setIsLoading(true);
    GetAddressService.getAddresses({
      apiKey: (_GetAddressConfig$api = GetAddressConfig.apiKey) !== null && _GetAddressConfig$api !== void 0 ? _GetAddressConfig$api : 'AG2YtZS2HEKCTOsZcDCFTg28696',
      postCode: InputValueRef.current,
      callback: onApiCall,
      callThrottle: throttle !== null && throttle !== void 0 ? throttle : 500,
      validator: validator !== null && validator !== void 0 ? validator : validatorPostCode
    });
  };

  var handleAddressSelect = function handleAddressSelect(_ref3) {
    var address = _ref3.name,
        id = _ref3.id;
    setValue(name, InputValueRef.current + '-' + address);
  };

  return /*#__PURE__*/React.createElement(FormLabel, {
    label: label
  }, /*#__PURE__*/React.createElement(InputWrapper, null, /*#__PURE__*/React.createElement(FormField, {
    errors: errors[name] ? errors : Errors,
    name: name,
    onChange: function onChange(e) {
      return handleInputChange(e.target.value);
    },
    placeholder: placeholder,
    register: register,
    size: size
  }), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleSearchClick,
    content: "Search",
    context: "primary",
    size: "sm"
  }))), (errors[name] || Errors[name]) && /*#__PURE__*/React.createElement(FormError, {
    message: errors[name] ? errors[name].message : Errors[name].message
  }), IsLoading && /*#__PURE__*/React.createElement(LoadingWrapper, {
    size: size
  }, /*#__PURE__*/React.createElement(Shimmer, {
    duration: 500
  })), /*#__PURE__*/React.createElement(Dropdown, {
    caret: false,
    items: Addresses,
    onChange: handleAddressSelect
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref
  })));
};
GetAddress.displayName = "GetAddress";
var InputWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  input {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n"])));
var LoadingWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 80%;\n  position: absolute;\n  top: 2.4rem;\n  left: 1.5rem;\n\n  ", "\n"])), function (_ref4) {
  var size = _ref4.size;

  switch (size) {
    case THEME_SIZE.SM:
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          top: 2.1rem;\n          height: 0.8rem;\n        "])));

    case THEME_SIZE.MD:
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          height: 1.125rem;\n        "])));

    case THEME_SIZE.LG:
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          height: 1.45rem;\n        "])));

    default:
      return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          height: 1.45rem;\n        "])));
  }
});
GetAddress.propTypes = {
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  register: func.isRequired,
  setValue: func.isRequired,
  size: oneOf(['sm', 'md', 'lg']),
  throttle: number,
  validator: func
};
GetAddress.defaultProps = {
  size: 'lg'
};
//# sourceMappingURL=index.js.map