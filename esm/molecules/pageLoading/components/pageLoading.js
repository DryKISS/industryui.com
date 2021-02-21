import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Page Loading
 */
// React
import React from 'react';
import { any, number, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var PageLoading = function PageLoading(_ref) {
  var children = _ref.children,
      dataCy = _ref.dataCy,
      indicator = _ref.indicator,
      props = _objectWithoutProperties(_ref, ["children", "dataCy", "indicator"]);

  return /*#__PURE__*/React.createElement(StyledLoading, _extends({
    "data-cy": dataCy
  }, props), indicator || children);
};
PageLoading.displayName = "PageLoading";
var StyledLoading = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  color: #fff;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  opacity: ", ";\n  position: ", ";\n  right: 0;\n  top: 0;\n  width: 100%;\n  z-index: 99;\n"])), function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var opacity = _ref3.opacity;
  return opacity;
}, function (_ref4) {
  var position = _ref4.position;
  return position;
});
PageLoading.propTypes = {
  backgroundColor: string,
  children: any,
  dataCy: string,
  indicator: any,
  opacity: number,
  position: string
};
PageLoading.defaultProps = {
  backgroundColor: '#fff',
  dataCy: 'loadingIndicator',
  opacity: 1,
  position: 'fixed'
};
//# sourceMappingURL=pageLoading.js.map