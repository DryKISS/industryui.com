import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

// React
import React from 'react';
import clsx from 'clsx'; // Style

import styled from 'styled-components'; // UI

import { handleHashtagClick } from './utils/handleHashtagClick';
export default function Hashtag(props) {
  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      className = props.className,
      decoratedText = props.decoratedText,
      dir = props.dir,
      entityKey = props.entityKey,
      getEditorState = props.getEditorState,
      offsetKey = props.offsetKey,
      setEditorState = props.setEditorState,
      contentState = props.contentState,
      blockKey = props.blockKey,
      otherProps = _objectWithoutProperties(props, ["theme", "className", "decoratedText", "dir", "entityKey", "getEditorState", "offsetKey", "setEditorState", "contentState", "blockKey"]);

  var combinedClassName = clsx(theme.hashtag, className);
  return /*#__PURE__*/React.createElement(StyledHashtag, _extends({
    onClick: function onClick() {
      return handleHashtagClick(props.decoratedText);
    }
  }, otherProps, {
    className: combinedClassName
  }));
}
Hashtag.displayName = "Hashtag";
var StyledHashtag = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n"])), function (_ref) {
  var MESSAGING = _ref.theme.MESSAGING;
  return MESSAGING.hashtagColour;
});
//# sourceMappingURL=Hashtag.js.map