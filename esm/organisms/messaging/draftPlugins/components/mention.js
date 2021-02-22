import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Organisms - Messaging - Draft Plugins - Components - Mention
 */
// React
import React from 'react'; // Style

import styled from 'styled-components'; // UI

import { MessagingActions, MessagingCommunicationService, MessageNames } from '../../../../';

var handleMentionClick = function handleMentionClick(mentionProps) {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: {
      action: MessagingActions.MENTION_CLICKED,
      data: mentionProps.mention
    }
  });
};

export var MentionComponent = function MentionComponent(_ref) {
  var mentionProps = _ref.mentionProps;
  return /*#__PURE__*/React.createElement(StyledMention, {
    className: mentionProps.className,
    onClick: function onClick() {
      return handleMentionClick(mentionProps);
    }
  }, mentionProps.children);
};
MentionComponent.displayName = "MentionComponent";
var StyledMention = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.mentionColour;
});
//# sourceMappingURL=mention.js.map