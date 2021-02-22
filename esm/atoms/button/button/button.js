import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Components - Atoms - Button
 */
// React
import React, { forwardRef } from 'react'; // Style

import styled, { css, useTheme } from 'styled-components'; // UI

import { Icon } from '../../../atoms/icon/icon/icon';
import { shadeLinearRgb } from '../../../utils/colour/colour';
import { SPACER } from '../../../theme/utils/spacer';
import { themeBackground } from '../../../theme/utils/background';
import { themeDimension } from '../../../theme/utils/dimension';
import { themeDisplay } from '../../../theme/utils/display'; // Props

import { propTypes, defaultProps } from './props';
export var Button = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      context = _ref.context,
      endIcon = _ref.endIcon,
      endIconProps = _ref.endIconProps,
      noPadding = _ref.noPadding,
      outline = _ref.outline,
      startIcon = _ref.startIcon,
      startIconProps = _ref.startIconProps,
      props = _objectWithoutProperties(_ref, ["children", "content", "context", "endIcon", "endIconProps", "noPadding", "outline", "startIcon", "startIconProps"]);

  var theme = useTheme();
  var textContext = getTextContext(context, outline, theme);
  var text = children || content;
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    context: context,
    noPadding: noPadding,
    outline: outline,
    textContext: textContext,
    ref: ref,
    role: "button"
  }, props), startIcon && /*#__PURE__*/React.createElement(Icon, _extends({
    icon: startIcon
  }, startIconProps, {
    prefix: startIconProps === null || startIconProps === void 0 ? void 0 : startIconProps.prefix
  })), text && /*#__PURE__*/React.createElement(StyledContent, null, text), endIcon && /*#__PURE__*/React.createElement(Icon, _extends({
    icon: endIcon
  }, endIconProps, {
    prefix: endIconProps === null || endIconProps === void 0 ? void 0 : endIconProps.prefix
  })));
});

var getTextContext = function getTextContext(context, outline, theme) {
  if (context === 'white') {
    return 'primary';
  }

  if (outline) {
    return context;
  }

  return 'white';
};

var StyledButton = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  align-items: center;\n  border: ", ";\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n  color: ", ";\n  cursor: pointer;\n  display: ", ";\n  font-size: 14px;\n  height: 3rem;\n  justify-content: center;\n  line-height: 100%;\n  outline: none;\n  overflow: visible;\n  text-decoration: none;\n  text-transform: none;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  margin: ", ";\n  width: ", ";\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  /* If two buttons are next to each other */\n  & + & {\n    margin-top: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  transition: all 0.1s ease-in-out;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n\n   ", "\n"])), function (props) {
  return themeBackground(props);
}, function (_ref2) {
  var context = _ref2.context,
      dashed = _ref2.dashed,
      outline = _ref2.outline,
      COLOUR = _ref2.theme.COLOUR;
  return outline ? "1px ".concat(dashed ? 'dashed' : 'solid', " ").concat(COLOUR[context]) : 'none';
}, function (_ref3) {
  var textContext = _ref3.textContext,
      COLOUR = _ref3.theme.COLOUR;
  return COLOUR[textContext];
}, function (_ref4) {
  var block = _ref4.block,
      centre = _ref4.centre;
  return centre || block ? 'flex' : 'inline-flex';
}, function (_ref5) {
  var centre = _ref5.centre;
  return centre ? 'auto' : 0;
}, function (_ref6) {
  var block = _ref6.block;
  return block ? '100%' : 'initial';
}, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      cursor: not-allowed;\n      opacity: 0.2;\n      pointer-events: none;\n    "])));
}, function (_ref8) {
  var size = _ref8.size,
      theme = _ref8.theme;
  return size === 'xs' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      font-size: 12px;\n      padding: ", ";\n      height: 24px;\n    "])), theme.SPACING(1, 2));
}, function (_ref9) {
  var size = _ref9.size;
  return size === 'sm' && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      font-size: 12px;\n      padding: ", ";\n      height: 32px;\n    "])), function (_ref10) {
    var theme = _ref10.theme;
    return theme.SPACING(2, 4);
  });
}, function (_ref11) {
  var size = _ref11.size;
  return size === 'lg' && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      font-size: 16px;\n      padding: ", ";\n      height: 56px;\n    "])), function (_ref12) {
    var theme = _ref12.theme;
    return theme.SPACING(4, 8);
  });
}, function (_ref13) {
  var block = _ref13.block;
  return block ? '1rem' : 'initial';
}, function (_ref14) {
  var context = _ref14.context,
      COLOUR = _ref14.theme.COLOUR;
  return shadeLinearRgb(-0.1, COLOUR[context]);
}, function (_ref15) {
  var context = _ref15.context,
      COLOUR = _ref15.theme.COLOUR;
  return shadeLinearRgb(-0.12, COLOUR[context]);
}, function (_ref16) {
  var COLOUR = _ref16.theme.COLOUR;
  return COLOUR.white;
}, function (props) {
  return props.shadow && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.12),\n        0px 10px 24px 0px rgba(0, 0, 0, 0.12),\n        0px 10px 24px 0px rgba(0, 0, 0, 0.12);\n    "])));
}, function (theme) {
  return themeDimension(theme);
}, function (theme) {
  return themeDisplay(theme);
}, function (theme) {
  return SPACER(theme);
}, function (_ref17) {
  var theme = _ref17.theme,
      noPadding = _ref17.noPadding;
  return noPadding && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding: 0;\n    "])));
});
var StyledContent = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  :not(:first-child) {\n    margin-left: ", ";\n  }\n\n  :not(:last-child) {\n    margin-right: ", ";\n  }\n"])), function (_ref18) {
  var theme = _ref18.theme;
  return theme.SPACING(2);
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.SPACING(2);
});
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
//# sourceMappingURL=button.js.map