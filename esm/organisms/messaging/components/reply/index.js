import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

// React
import React, { useEffect, useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // Draft JS

import { EditorState, ContentState, convertFromRaw } from 'draft-js'; // UI

import { Close, Divider, MessagingEditor, ReplyIcon } from '../../../../';
export var ReplyContainer = function ReplyContainer(_ref) {
  var message = _ref.message,
      onClose = _ref.onClose,
      inMessage = _ref.inMessage;

  var _useState = useState(EditorState.createWithContent(message.content.blocks ? convertFromRaw(message.content) : ContentState.createFromText(message.content))),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  useEffect(function () {
    setEditorState(EditorState.createWithContent(message.content.blocks ? convertFromRaw(message.content) : ContentState.createFromText(message.content)));
    return function () {};
  }, [message]);

  var handleCloseClick = function handleCloseClick() {
    onClose();
  };

  return /*#__PURE__*/React.createElement(Container, {
    inMessage: inMessage
  }, !inMessage && /*#__PURE__*/React.createElement(ReplyIconWrapper, null, /*#__PURE__*/React.createElement(ReplyIcon, {
    context: "info"
  })), /*#__PURE__*/React.createElement(Divider, {
    context: "info",
    height: "1.5rem",
    vertical: true
  }), /*#__PURE__*/React.createElement(MessageWrapper, null, /*#__PURE__*/React.createElement(FromWrapper, null, message.from), /*#__PURE__*/React.createElement(MessagingEditor, {
    onChange: function onChange(e) {
      return setEditorState(e);
    },
    editorState: editorState,
    readOnly: true
  })), onClose && /*#__PURE__*/React.createElement(Close, {
    click: handleCloseClick,
    context: "dark"
  }));
};
ReplyContainer.displayName = "ReplyContainer";
var FromWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: initial;\n  margin-bottom: -0.3rem;\n  margin-top: 0.3rem;\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.replyFromColour;
});
var MessageWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  flex: 1;\n  line-height: 2rem;\n"])), function (_ref3) {
  var MESSAGING = _ref3.theme.MESSAGING;
  return MESSAGING.replyTextColour;
});
var ReplyIconWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n"])));
var Container = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  height: ", ";\n  left: -4px;\n  overflow: hidden;\n  padding: 0.5rem 1rem;\n  position: absolute;\n  ", "\n  ", "\n  width: 100%;\n"])), function (_ref4) {
  var MESSAGING = _ref4.theme.MESSAGING;
  return MESSAGING.replyContainerBackground;
}, function (_ref5) {
  var MESSAGING = _ref5.theme.MESSAGING;
  return MESSAGING.replyContainerHeight;
}, function (_ref6) {
  var MESSAGING = _ref6.theme.MESSAGING;
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    top: calc(-", " - 0.05rem);\n  "])), MESSAGING.replyContainerHeight);
}, function (_ref7) {
  var inMessage = _ref7.inMessage;
  return inMessage && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      background: ", ";\n      border-radius: 0.5rem;\n      position: relative;\n      top: 0.5rem;\n      margin-bottom: 0.5rem;\n      hr {\n        margin-left: 0;\n      }\n    "])), function (_ref8) {
    var MESSAGING = _ref8.theme.MESSAGING;
    return MESSAGING.replyContainerBackgroundInsideMessage;
  });
});
//# sourceMappingURL=index.js.map