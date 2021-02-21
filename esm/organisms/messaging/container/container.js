import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Messaging/Container
 */
// React
import React, { useState } from 'react';
import { array, func, number, object, string } from 'prop-types'; // UI

import { DragAndDropable, FullPreview, MessageList, MessagingDragHover, MessagingSearch, MessagingSend, MessageNames, MessagingActions, MessagingCommunicationService, MessagingSubscriber, useComponentCommunication } from '../../../'; // Style

import styled from 'styled-components';
export var MessagingContainer = function MessagingContainer(_ref) {
  var audienceItems = _ref.audienceItems,
      className = _ref.className,
      forwardForMessages = _ref.forwardForMessages,
      maxLength = _ref.maxLength,
      mentions = _ref.mentions,
      menuForMessages = _ref.menuForMessages,
      messages = _ref.messages,
      messagesContainerHeight = _ref.messagesContainerHeight,
      onFilter = _ref.onFilter,
      onHashtagClick = _ref.onHashtagClick,
      onMentionClick = _ref.onMentionClick,
      onMessageSubmit = _ref.onMessageSubmit,
      onSearch = _ref.onSearch,
      replyForMessages = _ref.replyForMessages,
      style = _ref.style;

  var messagesConfig = _objectSpread(_objectSpread(_objectSpread({}, forwardForMessages && {
    hasForward: true
  }), menuForMessages && {
    hasMenu: true
  }), replyForMessages && {
    hasReply: true
  });

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      Files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = useState(messages && messages.length > 0),
      _useState4 = _slicedToArray(_useState3, 2),
      hasMessage = _useState4[0],
      sethasMessage = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      IsDragHoverOpen = _useState6[0],
      setIsDragHoverOpen = _useState6[1];

  var onHover = function onHover() {
    if (!IsDragHoverOpen) {
      setIsDragHoverOpen(true);
    }
  };

  var onLeave = function onLeave() {
    setIsDragHoverOpen(false);
  };

  var onDrop = function onDrop(e) {
    setFiles(e);
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: e
      }
    });
  };

  var closeHoverPopup = function closeHoverPopup() {
    setFiles(function (files) {
      return [];
    });
    setIsDragHoverOpen(false);
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: []
      }
    });
  };

  var handleRemoveFile = function handleRemoveFile(fileIndex) {
    var newFiles = _toConsumableArray(Files);

    newFiles.splice(fileIndex, 1);

    if (newFiles.length === 0) {
      closeHoverPopup();
      return;
    }

    setFiles(newFiles);
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: newFiles
      }
    });
  };

  var handleAttachSubmitClick = function handleAttachSubmitClick() {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: Files
      }
    });
  };

  var handleMessageRecieved = function handleMessageRecieved() {
    if (hasMessage === false) {
      sethasMessage(true);
    }
  };

  var onAction = function onAction(payload) {
    switch (payload.action) {
      case MessagingActions.HASHTAG_CLICKED:
        onHashtagClick(payload.data);
        break;

      case MessagingActions.MENTION_CLICKED:
        onMentionClick(payload.data);
        break;

      case MessagingActions.EDIT_MESSAGE:
        console.info(payload.data);
        break;

      case MessagingActions.DELETE_MESSAGE:
        console.info(payload.data);
        break;

      case MessagingActions.STAR_MESSAGE:
        console.info(payload.data);
        break;

      default:
        break;
    }
  };

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onAction,
    subscriber: MessagingSubscriber
  });

  var handleSubmit = function handleSubmit(messageToSend) {
    onMessageSubmit(messageToSend);
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.CLEAR_INPUT
      }
    });
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: []
      }
    });
    setIsDragHoverOpen(function () {
      return false;
    });
    setTimeout(function () {
      setFiles(function (files) {
        return [];
      });
    }, 500);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FullPreview, null), /*#__PURE__*/React.createElement(DragAndDropable, {
    onFileDrop: onDrop,
    onHover: onHover,
    onLeave: onLeave
  }, /*#__PURE__*/React.createElement(MessagingSearch, {
    onFilter: onFilter,
    onSearch: onSearch
  }), /*#__PURE__*/React.createElement(StyledContainer, {
    messagesContainerHeight: hasMessage ? messagesContainerHeight : 0,
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(MessageList, {
    config: messagesConfig,
    initialMessages: messages,
    onMessageRecieved: handleMessageRecieved
  })), /*#__PURE__*/React.createElement(MessagingSend, {
    audienceItems: audienceItems,
    onSubmit: handleSubmit,
    maxLength: maxLength,
    mentions: mentions
  }), /*#__PURE__*/React.createElement(MessagingDragHover, {
    files: Files,
    handleRemoveFile: handleRemoveFile,
    isOpen: IsDragHoverOpen,
    onClose: closeHoverPopup,
    onSubmit: handleAttachSubmitClick
  })));
};
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: ", ";\n  overflow: hidden;\n  position: relative;\n\n  .ReactVirtualized__Grid {\n    outline: none;\n  }\n  .public-DraftStyleDefault-block {\n    margin: 0.25em 0;\n  }\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.containerBackground;
}, function (_ref3) {
  var messagesContainerHeight = _ref3.messagesContainerHeight;
  return messagesContainerHeight ? messagesContainerHeight + 'px' : '300px';
});
MessagingContainer.propTypes = {
  audienceItems: array,
  className: string,
  messages: array.isRequired,
  messagesContainerHeight: number,
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  onMessageSubmit: func.isRequired,
  style: object
};
//# sourceMappingURL=container.js.map