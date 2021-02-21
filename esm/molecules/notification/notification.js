import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Molecules - Notification
 */
// React
import React from 'react';
import { func, object, oneOf, oneOfType, string } from 'prop-types'; // UI

import { Alert, formatRelativeTime, Link } from '../../';
import { THEME_CONTEXT } from '../../theme/constants/context'; // Style

import styled from 'styled-components';
export var Notification = function Notification(_ref) {
  var close = _ref.close,
      content = _ref.content,
      context = _ref.context,
      date = _ref.date,
      icon = _ref.icon,
      link = _ref.link,
      title = _ref.title;
  var body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledNotificationBody, null, content), date && /*#__PURE__*/React.createElement(StyledDate, null, formatRelativeTime(date)));

  if (link) {
    body = /*#__PURE__*/React.createElement(Link, {
      border: false,
      to: {
        href: link
      },
      onClick: function onClick() {
        return close();
      }
    }, body);
  }

  return /*#__PURE__*/React.createElement(StyledNotificationWrapper, null, /*#__PURE__*/React.createElement(Alert, {
    close: close,
    content: body,
    context: context,
    header: title,
    icon: icon
  }));
};
Notification.displayName = "Notification";
var StyledNotificationWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 0.25rem;\n  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;\n  max-width: 100%;\n  width: 350px;\n"])));
var StyledNotificationBody = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #fff;\n"])));
var StyledDate = styled.time(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-top: 1px solid #eaeaea;\n  color: #eaeaea;\n  display: block;\n  font-size: 0.9rem;\n  margin-top: 15px;\n  padding-top: 0.25rem;\n"])));
Notification.propTypes = {
  close: func.isRequired,
  content: oneOfType([object, string]).isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  date: string,
  icon: string,
  link: string,
  title: string
};
//# sourceMappingURL=notification.js.map