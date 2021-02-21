import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Atoms - Details2 - Content
 */
// React
import React from 'react';
import { bool, node, number, object } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var Details2Content = function Details2Content(_ref) {
  var animationTime = _ref.animationTime,
      children = _ref.children,
      contentRef = _ref.contentRef,
      fitParentHeight = _ref.fitParentHeight,
      isOpen = _ref.isOpen,
      maxHeight = _ref.maxHeight,
      mounted = _ref.mounted;
  return /*#__PURE__*/React.createElement(Wrapper, {
    animationDuration: animationTime,
    fitParentHeight: fitParentHeight,
    maxHeight: maxHeight,
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(Content, {
    fitParentHeight: fitParentHeight,
    isOpen: isOpen,
    ref: contentRef
  }, mounted && children));
};
Details2Content.displayName = "Details2Content";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: ", ";\n  overflow: hidden;\n  ", "\n  transition-duration: ", ";\n  transition-property: max-height;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n"])), function (_ref2) {
  var fitParentHeight = _ref2.fitParentHeight,
      maxHeight = _ref2.maxHeight,
      isOpen = _ref2.isOpen;
  return fitParentHeight ? 'unset' : isOpen ? maxHeight + 'px' : '0px';
}, function (_ref3) {
  var fitParentHeight = _ref3.fitParentHeight,
      isOpen = _ref3.isOpen;
  return fitParentHeight && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      height: ", ";\n    "])), !isOpen ? '0px' : 'calc(100% - 3.5rem)');
}, function (_ref4) {
  var animationDuration = _ref4.animationDuration;
  return (animationDuration !== null && animationDuration !== void 0 ? animationDuration : 300) + 'ms';
});
var Content = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0.5rem;\n  ", "\n"])), function (_ref5) {
  var fitParentHeight = _ref5.fitParentHeight,
      isOpen = _ref5.isOpen;
  return fitParentHeight && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      height: ", ";\n    "])), !isOpen ? '0px' : '100%');
});
Details2Content.propTypes = {
  animationTime: number,
  children: node.isRequired,
  contentRef: object,
  fitParentHeight: bool,
  isOpen: bool,
  maxHeight: number,
  mounted: bool
};
Details2Content.defaultProps = {
  animationTime: 100,
  isOpen: false
};
//# sourceMappingURL=content.js.map