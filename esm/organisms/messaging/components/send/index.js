import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Messaging/Send
 */
// React
import React, { useRef, useState } from 'react';
import { array, func, number } from 'prop-types'; // DraftJS

import { convertToRaw } from 'draft-js'; // UI

import { AudioWrapper, Button, Dropdown, EmojiSelect, EmojiSuggestions, Icon, VoiceRecorder, MessagingInput, MessagingAudioPlayer, MessageNames, MessagingActions, MessagingCommunicationService, MessagingSubscriber, PaperPlaneIcon, ReplyContainer, useComponentCommunication } from '../../../../'; // Style

import styled from 'styled-components';
export var MessagingSend = function MessagingSend(_ref) {
  var audienceItems = _ref.audienceItems,
      maxLength = _ref.maxLength,
      mentions = _ref.mentions,
      onSubmit = _ref.onSubmit;

  // const [open, setOpen] = useState(false)
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      Message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      attachments = _useState4[0],
      setAttachments = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      voiceMessage = _useState6[0],
      setVoiceMessage = _useState6[1];

  var _useState7 = useState(audienceItems[0] || ''),
      _useState8 = _slicedToArray(_useState7, 2),
      audience = _useState8[0],
      setAudience = _useState8[1];

  var fileInputRef = useRef();

  var openFileDialog = function openFileDialog() {
    fileInputRef.current.click();
  };

  var handleFilesChange = function handleFilesChange(e) {
    var files = e.target.files;
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: files
      }
    });
  };

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      replyMessage = _useState10[0],
      setreplyMessage = _useState10[1];

  var onActionRecieved = function onActionRecieved(payload) {
    switch (payload.action) {
      case MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE:
        setAttachments(payload.data);
        break;

      case MessagingActions.REPLY_MESSAGE:
        setreplyMessage(payload.data);
        break;

      default:
        break;
    }
  };

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: function onRecieve(e) {
      return onActionRecieved(e);
    },
    subscriber: MessagingSubscriber
  });

  var submit = function submit() {
    (replyMessage === null || replyMessage === void 0 ? void 0 : replyMessage.replyTo) && delete replyMessage.replyTo;

    var data = _objectSpread(_objectSpread({
      attachments: attachments,
      audience: audience.id,
      message: Message
    }, voiceMessage && {
      voice: voiceMessage
    }), replyMessage && {
      replyTo: replyMessage
    });

    onSubmit(data);
    setVoiceMessage(null);
    setreplyMessage(null);
  };

  var handleInputChange = function handleInputChange(e) {
    var contentState = e.getCurrentContent();
    setMessage(convertToRaw(contentState));
  };

  var isSendDisabled = function isSendDisabled() {
    var disabled = false;

    if (attachments.length === 0 && (Message === {} || Message.blocks && !Message.blocks[0].text && voiceMessage === null)) {
      disabled = true;
    }

    return disabled;
  };

  var handleDeleteVoiceClick = function handleDeleteVoiceClick() {
    setVoiceMessage(null);
  };

  var handleVoiceRecord = function handleVoiceRecord(e) {
    setVoiceMessage(e.data);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledContainer, {
    audience: audience
  }, replyMessage && /*#__PURE__*/React.createElement(ReplyContainer, {
    message: replyMessage,
    onClose: function onClose() {
      return setreplyMessage(null);
    }
  }, replyMessage.id), /*#__PURE__*/React.createElement(StyledWrapper, null, audience && /*#__PURE__*/React.createElement(StyledDropDown, {
    items: audienceItems,
    onChange: function onChange(item) {
      return setAudience(item);
    },
    position: "top"
  }, audience.name), /*#__PURE__*/React.createElement(StyledElements, null, /*#__PURE__*/React.createElement(EmojiSelectWrapper, null, /*#__PURE__*/React.createElement(EmojiSuggestions, null), /*#__PURE__*/React.createElement(EmojiSelect, null)), /*#__PURE__*/React.createElement(StyledIcon, {
    fixedWidth: false,
    icon: "paperclip",
    onClick: openFileDialog,
    size: "lg"
  })), voiceMessage && /*#__PURE__*/React.createElement(AudioWrapper, {
    preview: true
  }, /*#__PURE__*/React.createElement(MessagingAudioPlayer, {
    src: URL.createObjectURL(voiceMessage)
  }), /*#__PURE__*/React.createElement(DeleteIconWrapper, {
    onClick: handleDeleteVoiceClick
  }, /*#__PURE__*/React.createElement(Icon, {
    context: "danger",
    icon: "trash",
    prefix: "fas",
    size: "lg"
  }))), /*#__PURE__*/React.createElement(MessagingInput, {
    mentions: mentions,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    multiple: true,
    onChange: handleFilesChange,
    ref: fileInputRef,
    style: {
      display: 'none'
    },
    type: "file"
  }), /*#__PURE__*/React.createElement(StyledElements, null, isSendDisabled() ? /*#__PURE__*/React.createElement(VoiceRecorder, {
    onVoiceRecord: handleVoiceRecord
  }) : /*#__PURE__*/React.createElement(Button, {
    context: "transparent",
    disabled: isSendDisabled(),
    noPadding: true,
    onClick: submit,
    size: "xs"
  }, /*#__PURE__*/React.createElement(PaperPlaneIcon, {
    hoverColour: true
  }))))));
};
var DeleteIconWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 1rem;\n  padding-top: 0.5rem;\n  cursor: pointer;\n"])));
var EmojiSelectWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  [class*='emojiSelectPopover_'] {\n    top: -400px;\n    left: -10px;\n  }\n  [class*='emojiSuggestions'] {\n    top: -350px !important;\n  }\n  [class*='draftJsEmojiPlugin__emojiSelectButton_'] {\n    background-color: transparent !important;\n    border: none;\n    color: ", ";\n    font-size: 2.5rem;\n    font-weight: 600;\n    height: unset;\n    margin-top: -5px;\n    margin-right: 3px;\n    &:hover {\n      color: ", ";\n    }\n    width: unset;\n  }\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.inputIconsColour;
}, function (_ref3) {
  var MESSAGING = _ref3.theme.MESSAGING;
  return MESSAGING.inpotIconsHoverColour;
});
var StyledElements = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  place-content: space-evenly;\n  width: 4rem;\n"])));
var StyledContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-bottom: 1px solid #c0c0c0;\n  border-top: 1px solid #c0c0c0;\n  box-sizing: border-box;\n  color: #c0c0c0;\n  padding: ", ";\n  position: relative;\n  .public-DraftStyleDefault-block {\n    margin: 0.5em 0;\n  }\n"])), function (_ref4) {
  var MESSAGING = _ref4.theme.MESSAGING;
  return MESSAGING.inputSectionBackground;
}, function (_ref5) {
  var audience = _ref5.audience;
  return audience ? '1.5rem 1rem 1rem' : '1rem';
});
var StyledDropDown = styled(Dropdown)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 8px;\n  text-transform: uppercase;\n  top: -24px;\n\n  .dropdown--link {\n    color: #000;\n    font-size: 10px;\n  }\n\n  .dropdown--toggle,\n  svg {\n    color: ", ";\n    font-size: 10px;\n  }\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.COLOUR.info;
});
var StyledWrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  margin: 0;\n"])));
var StyledIcon = styled(Icon)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-right: 1rem;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n"])), function (_ref7) {
  var MESSAGING = _ref7.theme.MESSAGING;
  return MESSAGING.inputIconsColour;
}, function (_ref8) {
  var MESSAGING = _ref8.theme.MESSAGING;
  return MESSAGING.inpotIconsHoverColour;
});
MessagingSend.propTypes = {
  audienceItems: array,
  onSubmit: func.isRequired,
  maxLength: number
};
MessagingSend.defaultProps = {
  audienceItems: [],
  maxLength: 320
};
//# sourceMappingURL=index.js.map