import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createElement, useEffect, useRef } from 'react';
export var ClickAwayListener = function ClickAwayListener(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      onClickAway = _ref.onClickAway,
      _ref$mouseEvent = _ref.mouseEvent,
      mouseEvent = _ref$mouseEvent === void 0 ? 'click' : _ref$mouseEvent,
      _ref$touchEvent = _ref.touchEvent,
      touchEvent = _ref$touchEvent === void 0 ? 'touchend' : _ref$touchEvent,
      props = _objectWithoutProperties(_ref, ["as", "onClickAway", "mouseEvent", "touchEvent"]);

  var node = useRef(null);
  useEffect(function () {
    var handleEvents = function handleEvents(event) {
      if (node.current && node.current.contains(event.target)) {
        return;
      }

      onClickAway && onClickAway(event);
    };

    document.addEventListener(mouseEvent, handleEvents);
    document.addEventListener(touchEvent, handleEvents);
    return function () {
      document.removeEventListener(mouseEvent, handleEvents);
      document.removeEventListener(touchEvent, handleEvents);
    };
  }, [mouseEvent, onClickAway, touchEvent]);
  return /*#__PURE__*/createElement(as, _objectSpread({
    ref: node
  }, props));
};
//# sourceMappingURL=index.js.map