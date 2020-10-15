import { C as COMMON_INPUT_STYLES, E as ERROR_STYLE, p as propTypes } from './index-dbd16164.js';
import React, { useRef } from 'react';
import 'axios';
import 'moment';
import 'date-fns';
import 'bcryptjs';
import 'jsonwebtoken';
import styled, { css } from 'styled-components';
import 'lodash/cloneDeep';
import 'react-dom';
import 'react-resize-detector';
import 'next/head';
import 'gravatar';
import '@fortawesome/react-fontawesome';
import 'next/link';
import '@tippyjs/react';
import { Controller } from 'react-hook-form';
import 'react-datepicker';
import 'react-dropzone';
import 'react-dropzone-uploader';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import 'react-select';
import 'react-select/async';
import 'next/dynamic';
import 'lodash/range';
import 'highcharts/highstock';
import 'highcharts-react-official';
import '@nivo/bar';
import '@nivo/colors';
import '@nivo/line';
import '@nivo/pie';
import 'emoji-mart';
import 'util';
import 'react-google-maps';
import 'react-google-maps/lib/components/addons/MarkerClusterer';
import '@tanem/react-nprogress';
import 'lodash/chunk';
import 'next/router';
import 'react-big-calendar';
import 'react-color';
import 'yup';
import 'lodash/filter';
import '@apollo/client';
import 'lodash/merge';
import 'next/app';
import 'react-gtm-module';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

var __jsx = React.createElement;
var RichTextInput = function RichTextInput(_ref) {
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

  return __jsx(Wrapper, {
    errors: errors[name],
    onClick: (_editor$current = editor.current) === null || _editor$current === void 0 ? void 0 : _editor$current.focus()
  }, __jsx(Controller, {
    name: name,
    control: control,
    defaultValue: defaultValue,
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange;
      return __jsx(Editor, {
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
var Wrapper = styled.div.withConfig({
  displayName: "richEditor__Wrapper",
  componentId: "ip7pht-0"
})(["", " ", ""], function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref3) {
  var errors = _ref3.errors;
  return errors && css(["", ""], function (props) {
    return ERROR_STYLE(props);
  });
});
RichTextInput.propTypes = {
  control: propTypes.object.isRequired,
  errors: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  initialValue: propTypes.string
};

export { RichTextInput };
//# sourceMappingURL=richEditor-9e4adf4f.js.map
