import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

// React
import React from 'react'; // Style

import styled, { css } from 'styled-components';
export var BLOCK_TYPES = [{
  label: 'H1',
  style: 'header-one'
}, {
  label: 'H2',
  style: 'header-two'
}, {
  label: 'H3',
  style: 'header-three'
}, {
  label: 'H4',
  style: 'header-four'
}, {
  label: 'H5',
  style: 'header-five'
}, {
  label: 'H6',
  style: 'header-six'
}, {
  label: 'Blockquote',
  style: 'blockquote'
}, {
  label: 'UL',
  style: 'unordered-list-item'
}, {
  label: 'OL',
  style: 'ordered-list-item'
}, {
  label: 'Code Block',
  style: 'code-block'
}];
export var INLINE_STYLES = [{
  label: 'Bold',
  style: 'BOLD'
}, {
  label: 'Italic',
  style: 'ITALIC'
}, {
  label: 'Underline',
  style: 'UNDERLINE'
}];
export var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;
  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return /*#__PURE__*/React.createElement("div", {
    className: "RichEditor-controls"
  }, BLOCK_TYPES.map(function (type) {
    return /*#__PURE__*/React.createElement(StyleButton, {
      key: type.label,
      active: type.style === blockType,
      label: type.label,
      onToggle: props.onToggle,
      style: type.style
    });
  }));
};
BlockStyleControls.displayName = "BlockStyleControls";
export var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return /*#__PURE__*/React.createElement("div", {
    className: "RichEditor-controls"
  }, INLINE_STYLES.map(function (type) {
    return /*#__PURE__*/React.createElement(StyleButton, {
      key: type.label,
      active: currentStyle.has(type.style),
      label: type.label,
      onToggle: props.onToggle,
      style: type.style
    });
  }));
};
InlineStyleControls.displayName = "InlineStyleControls";
export var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};
export var getBlockStyle = function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';

    default:
      return null;
  }
};

var StyleButton = function StyleButton(_ref) {
  var active = _ref.active,
      label = _ref.label,
      onToggle = _ref.onToggle,
      style = _ref.style;

  var handleToggle = function handleToggle(e) {
    e.preventDefault();
    onToggle(style);
  };

  return /*#__PURE__*/React.createElement(StyledRichButton, {
    active: active,
    onMouseDown: handleToggle
  }, label);
};

StyleButton.displayName = "StyleButton";
var StyledRichButton = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 0 0.5rem;\n  ", "\n"])), function (_ref2) {
  var active = _ref2.active;
  return active && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      color: red;\n    "])));
});
//# sourceMappingURL=config.js.map