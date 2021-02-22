import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Components - Molecules - Emoji Mart
 */
// React
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { bool, func, string } from 'prop-types'; // Emoji Mart

import { Picker } from 'emoji-mart';
export var EmojiMart = function EmojiMart(_ref) {
  var closeOnClickOut = _ref.closeOnClickOut,
      handleSelect = _ref.handleSelect,
      handleOpenPicker = _ref.handleOpenPicker,
      open = _ref.open,
      style = _ref.style;
  var node = useRef();

  var handleClickAway = function handleClickAway(e) {
    e.preventDefault();
    var domNode = ReactDOM.findDOMNode(node.current);

    if (domNode.contains(encodeURIComponent.target)) {
      handleOpenPicker(false);
    }
  };

  useEffect(function () {
    if (open && closeOnClickOut) {
      document.addEventListener('mousedown', handleClickAway);
    } else {
      document.removeEventListener('mousedown', handleClickAway);
    }

    return function () {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [open]);

  var handlePickEmoji = function handlePickEmoji(emoji, e) {
    e.preventDefault();
    handleSelect(emoji["native"]);
    handleOpenPicker(false);
  };

  return open && /*#__PURE__*/React.createElement(Picker, {
    emoji: "",
    emojiSize: 16,
    include: ['foods', 'people', 'recent', 'nature'],
    onClick: handlePickEmoji,
    set: "google",
    sheetSize: 20,
    showSkinTones: false,
    showPreview: false,
    style: _objectSpread({
      border: 'initial',
      borderRadius: 'initial',
      width: '100%'
    }, style),
    title: "Pick your emoji...",
    ref: node
  });
};
EmojiMart.propTypes = {
  closeOnClickOut: bool,
  handleOpenPicker: func.isRequired,
  handleSelect: func.isRequired,
  open: bool,
  style: string
};
EmojiMart.defaultProps = {
  closeOnClickOut: true,
  open: false
};
//# sourceMappingURL=emojiMart.js.map