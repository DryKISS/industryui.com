import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Molecules - OffCanvas - Header
 */
// React
import React from 'react';
import { bool, func, oneOf, string } from 'prop-types'; // UI

import { Avatar, Button, Close, Column, Divider, Heading, Icon, Row, Text } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context'; // Style

import styled from 'styled-components';
import { lighten } from 'polished';
export var OffCanvasHeader = function OffCanvasHeader(_ref) {
  var context = _ref.context,
      hasAvatar = _ref.hasAvatar,
      headerContent = _ref.headerContent,
      onClose = _ref.onClose,
      submit = _ref.submit,
      title = _ref.title,
      variant = _ref.variant;
  return /*#__PURE__*/React.createElement(StyledHeader, {
    context: context,
    "data-cy": "offCanvasHeader",
    variant: variant
  }, /*#__PURE__*/React.createElement(Row, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Column, {
    sm: 8
  }, /*#__PURE__*/React.createElement(Icon, {
    context: variant === 'extended' ? 'white' : context,
    icon: "expand",
    prefix: "fas"
  }), /*#__PURE__*/React.createElement(StyledHeading, {
    content: title,
    context: context,
    tag: "h4",
    variant: variant
  })), /*#__PURE__*/React.createElement(Column, {
    sm: 4
  }, /*#__PURE__*/React.createElement(StyledContainer, null, submit && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    content: "Submit",
    context: "primary",
    form: "offCanvasForm",
    size: "sm",
    type: "submit"
  }), /*#__PURE__*/React.createElement(Divider, {
    flexItem: true,
    size: "sm",
    vertical: true
  })), /*#__PURE__*/React.createElement(Close, {
    click: onClose,
    context: variant === 'normal' ? context : 'white'
  })))), /*#__PURE__*/React.createElement(StyledBodyContainer, null, hasAvatar && /*#__PURE__*/React.createElement(StyledAvatarContainer, {
    context: context
  }, /*#__PURE__*/React.createElement(Avatar, {
    content: "Avatar",
    context: context,
    size: "lg"
  })), headerContent && /*#__PURE__*/React.createElement(StyledText, {
    content: headerContent,
    context: context,
    size: "xs",
    variant: variant
  })));
};
OffCanvasHeader.displayName = "OffCanvasHeader";
var StyledHeader = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-top: 0.5rem solid\n    ", ";\n  ", "\n  color: ", ";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 1.5rem 1rem 1rem;\n  position: fixed;\n  width: inherit;\n  z-index: 1;\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme,
      variant = _ref2.variant;
  return variant === 'normal' ? '#fff' : lighten(0.1, theme.COLOUR[context]);
}, function (_ref3) {
  var context = _ref3.context,
      variant = _ref3.variant,
      theme = _ref3.theme;
  return variant === 'normal' && context !== 'primary' ? theme.COLOUR[context] : 'transparent';
}, function (_ref4) {
  var shadow = _ref4.shadow;
  return shadow && 'box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.11);';
}, function (_ref5) {
  var COLOUR = _ref5.theme.COLOUR;
  return COLOUR.black;
});
var StyledHeading = styled(Heading)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: inline;\n  margin: 0;\n  padding-left: 0.25rem;\n"])), function (_ref6) {
  var context = _ref6.context,
      COLOUR = _ref6.theme.COLOUR,
      variant = _ref6.variant;
  return variant === 'normal' ? COLOUR.black : COLOUR.white;
});
var StyledContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n"])));
var StyledBodyContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var StyledAvatarContainer = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  margin-right: 24.5px;\n  min-height: 70px;\n  min-width: 70px;\n"])), function (_ref7) {
  var context = _ref7.context,
      theme = _ref7.theme;
  return lighten(0.2, theme.COLOUR[context]);
});
var StyledText = styled(Text)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref8) {
  var context = _ref8.context,
      theme = _ref8.theme,
      variant = _ref8.variant;
  return variant === 'normal' ? theme.COLOUR.black : theme.COLOUR.white;
});
OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  hasAvatar: bool,
  headerContent: string,
  onClose: func.isRequired,
  submit: bool,
  title: string.isRequired,
  variant: oneOf(['extended', 'normal'])
};
OffCanvasHeader.defaultProps = {
  hasAvatar: false,
  submit: true,
  variant: 'extended'
};
//# sourceMappingURL=header.js.map