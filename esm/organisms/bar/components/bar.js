import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Components - Organisms - Bar - Components - Bar
 */
// React
import React, { useState } from 'react'; // UI

import { BarOverlay } from './overlay';
import { BarToggle } from './toggle';
import { BarWrapper } from './wrapper';
import { BarPropTypes, BarDefaultProps } from './props'; // Style

import styled from 'styled-components';
export var Bar = function Bar(_ref) {
  var children = _ref.children,
      minSize = _ref.minSize,
      open = _ref.open,
      placement = _ref.placement,
      toggle = _ref.toggle,
      backdrop = _ref.backdrop,
      variant = _ref.variant,
      width = _ref.width;

  var _useState = useState(open !== null && open !== void 0 ? open : true),
      _useState2 = _slicedToArray(_useState, 2),
      IsOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggleOpen = function toggleOpen() {
    setIsOpen(!IsOpen);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BarWrapper, {
    open: IsOpen,
    placement: placement,
    variant: variant,
    width: width,
    minSize: minSize
  }, toggle && /*#__PURE__*/React.createElement(BarToggle, {
    onClick: toggleOpen,
    open: IsOpen,
    placement: placement,
    barWidth: width
  }), /*#__PURE__*/React.createElement(StyledContent, {
    open: IsOpen
  }, children)), backdrop && /*#__PURE__*/React.createElement(BarOverlay, {
    onClick: toggleOpen,
    open: IsOpen,
    placement: placement,
    variant: variant,
    width: width
  }));
};
var StyledContent = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n"])), function (_ref2) {
  var open = _ref2.open;
  return !open && 'none';
});
Bar.propTypes = BarPropTypes;
Bar.defaultProps = BarDefaultProps;
//# sourceMappingURL=bar.js.map