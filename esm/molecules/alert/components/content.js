import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Alert - Components - Content
 */
// React
import React from 'react';
import { object, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Icon } from '../../../atoms/icon/icon/icon';
export var AlertContent = function AlertContent(_ref) {
  var content = _ref.content,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix;
  return /*#__PURE__*/React.createElement(StyledAlertContent, null, icon && /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    context: "help",
    icon: icon,
    prefix: iconPrefix
  }), content);
};
AlertContent.displayName = "AlertContent";
var StyledAlertContent = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0.75rem 1.25rem;\n"])));
AlertContent.propTypes = {
  content: oneOfType([object, string]).isRequired,
  icon: string,
  iconPrefix: string
};
//# sourceMappingURL=content.js.map