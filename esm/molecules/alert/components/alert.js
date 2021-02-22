import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2;

/**
 * Components - Molecules - Alert - Components - Alert
 */
// React
import React, { useState } from 'react';
import { func, object, objectOf, number, oneOf, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { AlertContent } from './content';
import { AlertHeader } from './header';
import { Close, shadeLinearRgb } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
import { themeBackground } from '../../../theme/utils/background';
export var Alert = function Alert(_ref) {
  var className = _ref.className,
      close = _ref.close,
      content = _ref.content,
      context = _ref.context,
      header = _ref.header,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix,
      style = _ref.style;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleClose = function handleClose() {
    setVisible(false);
    close && close();
  };

  return visible && /*#__PURE__*/React.createElement(StyledAlert, {
    className: className,
    context: context,
    style: style
  }, close && /*#__PURE__*/React.createElement(StyledClose, {
    click: handleClose,
    context: "white",
    header: header,
    icon: "times"
  }), header && /*#__PURE__*/React.createElement(AlertHeader, {
    context: context,
    header: header,
    icon: icon,
    iconPrefix: iconPrefix
  }), /*#__PURE__*/React.createElement(AlertContent, {
    content: content,
    icon: header ? null : icon,
    iconPrefix: iconPrefix
  }));
};
var StyledAlert = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  border: 1px solid ", ";\n  border-radius: 0.25rem;\n  color: ", ";\n  position: relative;\n"])), function (props) {
  return themeBackground(props);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.light;
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return shadeLinearRgb(-0.8, theme.COLOUR[context]);
});
var StyledClose = styled(Close)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: ", ";\n"])), function (_ref4) {
  var header = _ref4.header;
  return header ? '0' : '4px';
});
Alert.propTypes = {
  close: func,
  content: oneOfType([object, string]).isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  header: string,
  icon: string,
  iconPrefix: string,
  style: objectOf(oneOfType([number, string]))
};
Alert.defaultProps = {
  context: 'primary'
};
//# sourceMappingURL=alert.js.map