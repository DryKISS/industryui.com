import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

// React
import React, { useRef } from 'react';
import { object, string } from 'prop-types';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import { Controller } from 'react-hook-form';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html'; // UI

import styled, { css } from 'styled-components';
import { COMMON_INPUT_STYLES, ERROR_STYLE } from '../../';
export var RichTextInput = function RichTextInput(_ref) {
  var _editor$current;

  var control = _ref.control,
      errors = _ref.errors,
      initialValue = _ref.initialValue,
      name = _ref.name;
  var editor = useRef(null);
  var content = EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(initialValue !== null && initialValue !== void 0 ? initialValue : '')));
  var defaultValue = {
    editorState: content,
    html: initialValue !== null && initialValue !== void 0 ? initialValue : ''
  };

  var _onEditorStateChange = function onEditorStateChange(editorState, onChange) {
    var html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    onChange({
      editorState: editorState,
      html: html
    });
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    errors: errors[name],
    onClick: (_editor$current = editor.current) === null || _editor$current === void 0 ? void 0 : _editor$current.focus()
  }, /*#__PURE__*/React.createElement(Controller, {
    name: name,
    control: control,
    defaultValue: defaultValue,
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange;
      return /*#__PURE__*/React.createElement(Editor, {
        editorState: value.editorState,
        wrapperClassName: "wrapper-class",
        editorClassName: "editor-class",
        onEditorStateChange: function onEditorStateChange(e) {
          return _onEditorStateChange(e, onChange);
        }
      });
    }
  }));
};
RichTextInput.displayName = "RichTextInput";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref3) {
  var errors = _ref3.errors;
  return errors && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    return ERROR_STYLE(props);
  });
});
RichTextInput.propTypes = {
  control: object.isRequired,
  errors: object.isRequired,
  name: string.isRequired,
  initialValue: string
};
//# sourceMappingURL=richEditor.js.map