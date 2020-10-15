'use strict';

var index = require('./index-fdfe050a.js');
var React = require('react');
require('axios');
require('moment');
require('date-fns');
require('bcryptjs');
require('jsonwebtoken');
var styled = require('styled-components');
require('lodash/cloneDeep');
require('react-dom');
require('react-resize-detector');
require('next/head');
require('gravatar');
require('@fortawesome/react-fontawesome');
require('next/link');
require('@tippyjs/react');
var reactHookForm = require('react-hook-form');
require('react-datepicker');
require('react-dropzone');
require('react-dropzone-uploader');
var draftJs = require('draft-js');
require('react-select');
require('react-select/async');
require('next/dynamic');
require('lodash/range');
require('highcharts/highstock');
require('highcharts-react-official');
require('@nivo/bar');
require('@nivo/colors');
require('@nivo/line');
require('@nivo/pie');
require('emoji-mart');
require('util');
require('react-google-maps');
require('react-google-maps/lib/components/addons/MarkerClusterer');
require('@tanem/react-nprogress');
require('lodash/chunk');
require('next/router');
require('react-big-calendar');
require('react-color');
require('yup');
require('lodash/filter');
require('@apollo/client');
require('lodash/merge');
require('next/app');
require('react-gtm-module');
var reactDraftWysiwyg = require('react-draft-wysiwyg');
var draftToHtml = require('draftjs-to-html');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var draftToHtml__default = /*#__PURE__*/_interopDefaultLegacy(draftToHtml);

var __jsx = React__default['default'].createElement;
var RichTextInput = function RichTextInput(_ref) {
  var _editor$current;

  var control = _ref.control,
      errors = _ref.errors,
      initialValue = _ref.initialValue,
      name = _ref.name;
  var editor = React.useRef(null);
  var content = draftJs.EditorState.createWithContent(draftJs.ContentState.createFromBlockArray(draftJs.convertFromHTML(initialValue !== null && initialValue !== void 0 ? initialValue : '')));
  var defaultValue = {
    editorState: content,
    html: initialValue !== null && initialValue !== void 0 ? initialValue : ''
  };

  var _onEditorStateChange = function onEditorStateChange(editorState, onChange) {
    var html = draftToHtml__default['default'](draftJs.convertToRaw(editorState.getCurrentContent()));
    onChange({
      editorState: editorState,
      html: html
    });
  };

  return __jsx(Wrapper, {
    errors: errors[name],
    onClick: (_editor$current = editor.current) === null || _editor$current === void 0 ? void 0 : _editor$current.focus()
  }, __jsx(reactHookForm.Controller, {
    name: name,
    control: control,
    defaultValue: defaultValue,
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange;
      return __jsx(reactDraftWysiwyg.Editor, {
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
var Wrapper = styled__default['default'].div.withConfig({
  displayName: "richEditor__Wrapper",
  componentId: "ip7pht-0"
})(["", " ", ""], function (props) {
  return index.COMMON_INPUT_STYLES(props);
}, function (_ref3) {
  var errors = _ref3.errors;
  return errors && styled.css(["", ""], function (props) {
    return index.ERROR_STYLE(props);
  });
});
RichTextInput.propTypes = {
  control: index.propTypes.object.isRequired,
  errors: index.propTypes.object.isRequired,
  name: index.propTypes.string.isRequired,
  initialValue: index.propTypes.string
};

exports.RichTextInput = RichTextInput;
//# sourceMappingURL=richEditor-24649cf0.js.map
