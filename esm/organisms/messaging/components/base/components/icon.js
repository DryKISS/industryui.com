import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Messaging - Base - Icon
 */
// React
import React from 'react';
import { oneOf, string } from 'prop-types'; // UI

import { Icon, ICON_PREFIX } from '../../../../../'; // Style

import styled from 'styled-components';
export var MessageIcon = function MessageIcon(_ref) {
  var icon = _ref.icon,
      prefix = _ref.prefix;
  var useIcon = '';

  switch (icon) {
    case 'comment':
      useIcon = 'comment-dots';
      break;

    case 'notification':
      useIcon = 'bell';
      break;

    default:
      useIcon = 'envelope';
      break;
  }

  return /*#__PURE__*/React.createElement(StyledIcon, {
    fixedWidth: false,
    icon: useIcon,
    prefix: prefix
  });
};
MessageIcon.displayName = "MessageIcon";
var StyledIcon = styled(Icon)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-right: 0.5rem;\n  vertical-align: middle !important;\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.messageIconColour;
});
MessageIcon.propTypes = {
  icon: string.isRequired,
  prefix: oneOf(Object.values(ICON_PREFIX))
};
MessageIcon.defaultProps = {
  prefix: 'fas'
};
//# sourceMappingURL=icon.js.map