import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Page Loading
 */
// React
import React from 'react';
import { number, string } from 'prop-types'; // Style

import styled from 'styled-components';
var SPINNER = Array(12).fill('');
var LdsSpinnerWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  div {\n    transform-origin: ", "px ", "px;\n    animation: lds-spinner 1.2s linear infinite;\n    ::after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      top: ", "px;\n      left: ", "px;\n      width: ", "px;\n      height: ", "px;\n      border-radius: ", "%;\n      background: ", ";\n    }\n  }\n\n  ", "\n  @keyframes lds-spinner {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n"])), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size / 2;
}, function (_ref4) {
  var size = _ref4.size;
  return size / 2;
}, function (_ref5) {
  var size = _ref5.size;
  return size / 10 - 5;
}, function (_ref6) {
  var size = _ref6.size;
  return size / 2 - 3;
}, function (_ref7) {
  var size = _ref7.size;
  return size / 10 - 2;
}, function (_ref8) {
  var size = _ref8.size;
  return size / 4 - 2;
}, function (_ref9) {
  var size = _ref9.size;
  return size / 4;
}, function (_ref10) {
  var color = _ref10.color;
  return color;
}, function (_ref11) {
  var spinner = _ref11.spinner;
  var temp = '';
  spinner.forEach(function (s, i) {
    temp += "\n        div:nth-child(".concat(i + 1, ") {\n          transform: rotate(").concat(i * 30, "deg);\n          animation-delay: ").concat(-1.1 + parseFloat(i * 0.1), "s;\n        }\n      ");
  });
  return temp;
});
export var LdsSpinner = function LdsSpinner(props) {
  return /*#__PURE__*/React.createElement(LdsSpinnerWrapper, _extends({}, props, {
    spinner: SPINNER
  }), SPINNER.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: 'spin' + i
    });
  }));
};
LdsSpinner.displayName = "LdsSpinner";
LdsSpinner.propTypes = {
  size: number,
  color: string
};
LdsSpinner.defaultProps = {
  size: 80,
  color: '#333'
};
//# sourceMappingURL=ldsSpinner.js.map