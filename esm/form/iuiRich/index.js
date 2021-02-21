import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// React
import React, { useRef, useState } from 'react'; // Draft JS

import { Editor, EditorState, RichUtils } from 'draft-js'; // Config

import { BlockStyleControls, InlineStyleControls, getBlockStyle, styleMap } from './config';
export var IUIRich = function IUIRich() {
  var _useState = useState(EditorState.createEmpty()),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      seteditorState = _useState2[1];

  var ref = useRef(null);

  var focus = function focus() {
    ref.current.focus();
  };

  var handleChange = function handleChange(EditorState) {
    return seteditorState(EditorState);
  };

  var onKeyCommand = function onKeyCommand(command) {
    var newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      handleChange(newState);
      return true;
    }

    return false;
  };

  var handleTab = function handleTab(e) {
    var maxDepth = 4;
    handleChange(RichUtils.onTab(e, editorState, maxDepth));
  };

  var toggleBlockType = function toggleBlockType(blockType) {
    handleChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  var toggleInlineStyle = function toggleInlineStyle(inlineStyle) {
    handleChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return /*#__PURE__*/React.createElement("div", {
    onClick: focus
  }, /*#__PURE__*/React.createElement(BlockStyleControls, {
    editorState: editorState,
    onToggle: toggleBlockType
  }), /*#__PURE__*/React.createElement(InlineStyleControls, {
    editorState: editorState,
    onToggle: toggleInlineStyle
  }), /*#__PURE__*/React.createElement(Editor, {
    blockStyleFn: getBlockStyle,
    customStyleMap: styleMap,
    editorState: editorState,
    handleKeyCommand: onKeyCommand,
    onChange: handleChange,
    onTab: handleTab,
    placeholder: "write here...",
    ref: ref,
    spellCheck: true
  }));
};
IUIRich.displayName = "IUIRich";
//# sourceMappingURL=index.js.map