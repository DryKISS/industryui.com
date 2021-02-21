import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Messaging/Message
 */
// React
import React, { memo, useState } from 'react';
import { object, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { Avatar, MessageBase, MessageNames, MessagingActions, MessagingCommunicationService } from '../../../../';
import { ReplyIcon } from './replyIcon';
import { ShareIcon } from './shareIcon';
export var Message = /*#__PURE__*/memo(function (_ref) {
  var config = _ref.config,
      message = _ref.message,
      prevType = _ref.prevType,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["config", "message", "prevType", "type"]);

  var avatar = message.avatar ? /*#__PURE__*/React.createElement(Avatar, {
    size: "xxs",
    src: message.avatar
  }) : /*#__PURE__*/React.createElement(Avatar, {
    size: "xxs",
    content: message.from[0]
  });

  var handleReplyClick = function handleReplyClick() {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.REPLY_MESSAGE,
        data: message
      }
    });
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovered = _useState2[0],
      sethovered = _useState2[1];

  var sideActions = /*#__PURE__*/React.createElement(SideActionsWrapper, null, /*#__PURE__*/React.createElement(AvatarWrapper, null, avatar), config.hasReply && /*#__PURE__*/React.createElement(IconWrapper, {
    onClick: handleReplyClick,
    title: "reply"
  }, /*#__PURE__*/React.createElement(ReplyIcon, null)), config.hasForward && /*#__PURE__*/React.createElement(IconWrapper, {
    title: "share"
  }, /*#__PURE__*/React.createElement(ShareIcon, null)));

  var hasText = function hasText() {
    var plainText = '';

    if (message.content.blocks) {
      plainText = message.content.blocks.map(function (block) {
        return !block.text.trim() && '\n' || block.text;
      }).join('\n');
    } else {
      plainText = message.content;
    }

    if (plainText.length > 1) {
      return true;
    }

    return false;
  };

  var handleMouseOver = function handleMouseOver() {
    config.hasMenu && sethovered(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    config.hasMenu && sethovered(false);
  };

  return /*#__PURE__*/React.createElement(RowWrapper, {
    hasTimeHeader: message.headerTime,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  }, message.headerTime && /*#__PURE__*/React.createElement(TimeHeader, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, message.headerTime), /*#__PURE__*/React.createElement("p", null))), type === 'in' && sideActions, /*#__PURE__*/React.createElement(MessageBase, _extends({
    hovered: hovered,
    prevType: prevType,
    hasText: hasText(),
    hasMenu: config.hasMenu
  }, message, props)), type === 'out' && sideActions);
}, function () {
  return true;
});
var TimeHeader = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  margin-top: -0.1rem;\n  text-align: center;\n  width: 100%;\n  background: ", ";\n  height: 1px;\n  div {\n    background: white;\n    border: 1px solid;\n    border-radius: 100px;\n    display: flex;\n    font-size: 0.75rem;\n    height: 19px;\n    left: calc(50% - 50px);\n    padding: 0.1rem 0.5rem;\n    place-content: center;\n    position: relative;\n    top: -0.7rem;\n    width: 110px;\n    span {\n      line-height: 12px;\n      padding-top: 1px;\n      position: absolute;\n      z-index: 1;\n    }\n    p {\n      background: ", ";\n      border-radius: 15px;\n      bottom: 0;\n      left: 0;\n      margin: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n    }\n  }\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.dateDividerColour || '#0000';
}, function (_ref3) {
  var MESSAGING = _ref3.theme.MESSAGING;
  return MESSAGING.dateBadgeBackground || MESSAGING.containerBackground;
});
var IconWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 0.25rem 0;\n  text-align: center;\n  width: 100%;\n  path {\n    fill: ", ";\n  }\n"])), function (_ref4) {
  var MESSAGING = _ref4.theme.MESSAGING;
  return MESSAGING.forwardAndReplyIconsColour;
});
var SideActionsWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"])));
var RowWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  ", "\n"])), function (_ref5) {
  var hasTimeHeader = _ref5.hasTimeHeader;
  return hasTimeHeader && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-top: 1rem;\n    "])));
});
var AvatarWrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0 0.5rem;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  div {\n    background: ", ";\n  }\n"])), function (_ref6) {
  var MESSAGING = _ref6.theme.MESSAGING;
  return MESSAGING.avatarBackground;
});
Message.propTypes = {
  message: object.isRequired,
  prevType: string.isRequired
};
//# sourceMappingURL=index.js.map