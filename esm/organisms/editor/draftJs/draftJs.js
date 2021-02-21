import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Editor
 */
// React
import React, { useState } from 'react'; // React Hook Form

import { Controller } from 'react-hook-form'; // Draft JS

import { Editor, EditorState, RichUtils } from 'draft-js';
import { BlockType } from './constants';
export var DraftJs = function DraftJs(_ref) {
  var control = _ref.control,
      name = _ref.name,
      setValue = _ref.setValue;

  var _useState = useState(EditorState.createEmpty()),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var toggleInlineStyle = function toggleInlineStyle(event) {
    event.preventDefault();
    var style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  var handleKeyCommand = function handleKeyCommand(command, editorState) {
    var newEditorState = RichUtils.handleKeyCommand(editorState, command);

    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }

    return 'not-handled';
  };

  var handleOnChange = function handleOnChange(newEditorState) {
    setEditorState(newEditorState); // This is returning the current plain Value, we will have to see if we will get back the whole
    // State and then write a parser or how we will manage that

    setValue(name, newEditorState.getCurrentContent().getPlainText("\x01"));
  }; // TODO: Do the inputList dynamic creating a map with the Key-Value to generate the needed


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "B",
    "data-style": "BOLD",
    onMouseDown: toggleInlineStyle
  }), /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "I",
    "data-style": "ITALIC",
    onMouseDown: toggleInlineStyle
  }), /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "S",
    "data-style": "STRIKETHROUGH",
    onMouseDown: toggleInlineStyle
  }), /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "U",
    "data-style": "UNDERLINE",
    onMouseDown: toggleInlineStyle
  }), /*#__PURE__*/React.createElement(Controller, {
    name: name,
    control: control,
    render: function render(props) {
      return /*#__PURE__*/React.createElement(Editor, {
        editorState: editorState,
        blockStyleFn: myBlockStyleFn,
        handleKeyCommand: handleKeyCommand,
        onChange: handleOnChange
      });
    }
  }));
};

function myBlockStyleFn(contentBlock) {
  var type = contentBlock.getType();

  if (type === BlockType.BLOCKQUOTE) {
    // TODO: return the right css according to be applied into the whole block
    return undefined;
  }
}
//# sourceMappingURL=draftJs.js.map