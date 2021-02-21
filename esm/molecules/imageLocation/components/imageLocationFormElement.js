import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Image Location FormElement
 */
// React
import React from 'react';
import { func, object } from 'prop-types'; // React Hook Form

import { Controller } from 'react-hook-form'; // Style

import styled, { keyframes } from 'styled-components'; // UI

import { ImageLocation, ImageLocationProps } from '../../../';
var elementName = 'imageLocationData';
export var ImageLocationFormElement = function ImageLocationFormElement(_ref) {
  var control = _ref.control,
      errors = _ref.errors,
      setValue = _ref.setValue,
      props = _objectWithoutProperties(_ref, ["control", "errors", "setValue"]);

  return /*#__PURE__*/React.createElement(ControllerWrapper, {
    className: "".concat(errors && errors[elementName] && 'hasError')
  }, /*#__PURE__*/React.createElement(Controller, _extends({
    as: ImageLocation,
    control: control,
    coordinatesChange: function coordinatesChange(imageLocationData) {
      setValue(elementName, imageLocationData);
    },
    name: elementName
  }, props)));
};
ImageLocationFormElement.displayName = "ImageLocationFormElement";
var imageAllert = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\nfilter: invert(0);\n  }\n  to {\nfilter: invert(1);\n  }\n"])));
var ControllerWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  &.hasError {\n    box-shadow: 0 0 4px red;\n    animation: ", " 0.2s linear 2;\n  }\n"])), imageAllert);
ImageLocationFormElement.propTypes = _objectSpread(_objectSpread({}, ImageLocationProps), {}, {
  setValue: func.isRequired,
  control: object.isRequired
});
//# sourceMappingURL=imageLocationFormElement.js.map