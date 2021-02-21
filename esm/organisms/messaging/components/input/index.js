import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Components - Messaging
 */
// React
import React, { useState, useRef } from 'react'; // Draft JS

import { EditorState } from 'draft-js';
import { defaultSuggestionsFilter } from '@draft-js-plugins/mention'; // Style

import styled from 'styled-components'; // UI

import { MentionSuggestions, MessageNames, MessagingActions, MessagingEditor, messagingPlugins, MessagingSubscriber, useComponentCommunication } from '../../../../';
import { formStyle } from '../../../../form/variables/style';
export var MessagingInput = function MessagingInput(_ref) {
  var _suggestions$length;

  var mentions = _ref.mentions,
      onChange = _ref.onChange;

  var _useState = useState(mentions !== null && mentions !== void 0 ? mentions : []),
      _useState2 = _slicedToArray(_useState, 2),
      suggestions = _useState2[0],
      setSuggestions = _useState2[1]; // Draft-JS editor configuration


  var _useState3 = useState(function () {
    return EditorState.createEmpty();
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      editorState = _useState4[0],
      setEditorState = _useState4[1];

  var editor = useRef(null); // Check editor text for mentions

  var onSearchChange = function onSearchChange(_ref2) {
    var value = _ref2.value;
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  };

  var onAddMention = function onAddMention(e) {
    console.info(e);
  }; // Focus on editor window


  var focusEditor = function focusEditor() {
    editor.current.focus();
  };

  var handleChange = function handleChange(e) {
    onChange(e);
    setEditorState(e);
  };

  var onActionRecieved = function onActionRecieved(payload) {
    switch (payload.action) {
      case MessagingActions.CLEAR_INPUT:
        setEditorState(EditorState.createEmpty());
        break;

      default:
        break;
    }
  };

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onActionRecieved,
    subscriber: MessagingSubscriber
  });
  return /*#__PURE__*/React.createElement(Wrapper, {
    onClick: function onClick() {
      return focusEditor();
    },
    topMultiplier: (_suggestions$length = suggestions === null || suggestions === void 0 ? void 0 : suggestions.length) !== null && _suggestions$length !== void 0 ? _suggestions$length : 0
  }, mentions && /*#__PURE__*/React.createElement(MentionSuggestions, {
    onAddMention: onAddMention,
    onSearchChange: onSearchChange,
    suggestions: suggestions
  }), /*#__PURE__*/React.createElement(MessagingEditor, {
    editorState: editorState,
    onChange: handleChange,
    plugins: messagingPlugins,
    placeholder: "Type here...",
    ref: editor
  }));
};
MessagingInput.displayName = "MessagingInput";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  [class*='mentionSuggestions'] {\n    top: ", " !important;\n  }\n  ", "\n  font-size:", ";\n  width: calc(100% - 8rem);\n  max-height: ", ";\n  overflow-y: auto;\n"])), function (_ref3) {
  var topMultiplier = _ref3.topMultiplier;
  return '-' + topMultiplier * 35 + 'px';
}, function (props) {
  return formStyle(props);
}, function (_ref4) {
  var MESSAGING = _ref4.theme.MESSAGING;
  return MESSAGING.inputFontSize;
}, function (_ref5) {
  var MESSAGING = _ref5.theme.MESSAGING;
  return MESSAGING.maxInputHeight;
});
//# sourceMappingURL=index.js.map