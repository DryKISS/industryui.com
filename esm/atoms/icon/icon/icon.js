import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Icon
 */
// React
import React from 'react'; // FontAwesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Style

import styled from 'styled-components'; // UI

import { SPACER } from '../../../';
import { IconPropTypes, IconDefaultProps } from './props';
import { themeDisplay } from '../../../theme/utils/display';
export var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      prefix = _ref.prefix,
      props = _objectWithoutProperties(_ref, ["icon", "prefix"]);

  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    icon: [prefix, icon]
  }, props));
};
Icon.displayName = "Icon";
var StyledIcon = styled(FontAwesomeIcon)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  ", "\n  ", "\n"])), function (_ref2) {
  var color = _ref2.color,
      context = _ref2.context,
      theme = _ref2.theme;
  return context ? theme.COLOUR[context] : color;
}, function (theme) {
  return themeDisplay(theme);
}, function (theme) {
  return SPACER(theme);
});
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;
//# sourceMappingURL=icon.js.map