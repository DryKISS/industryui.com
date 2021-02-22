import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Page Heading
 */
// React
import React from 'react';
import { any, bool, element, oneOf, string } from 'prop-types'; // UI

import { Divider, Heading } from '../../';
import { THEME_CONTEXT } from '../../theme/constants/context'; // Style

import styled from 'styled-components';
export var PageHeading = function PageHeading(_ref) {
  var center = _ref.center,
      children = _ref.children,
      context = _ref.context,
      divider = _ref.divider,
      heading = _ref.heading,
      help = _ref.help,
      helpContent = _ref.helpContent,
      strapline = _ref.strapline;
  return /*#__PURE__*/React.createElement(StyledPageHeader, {
    center: center,
    divider: divider
  }, /*#__PURE__*/React.createElement(StyledLeft, null, /*#__PURE__*/React.createElement(StyledHeading, {
    content: heading,
    context: context,
    pageHeading: true
  }), strapline && /*#__PURE__*/React.createElement("div", null, strapline)), (children || help) && /*#__PURE__*/React.createElement(StyledRight, null, children || helpContent), divider && /*#__PURE__*/React.createElement(StyledDivider, {
    size: "md"
  }));
};
PageHeading.displayName = "PageHeading";
var StyledPageHeader = styled.header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ", ";\n  text-align: ", ";\n"])), function (_ref2) {
  var divider = _ref2.divider;
  return !divider && '2rem';
}, function (_ref3) {
  var center = _ref3.center;
  return center && 'center';
});
var StyledLeft = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
var StyledRight = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"])));
var StyledHeading = styled(Heading)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n"])), function (_ref4) {
  var divider = _ref4.divider;
  return !divider ? '0' : '0.5rem';
});
var StyledDivider = styled(Divider)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
PageHeading.propTypes = {
  center: bool,
  children: element,
  context: oneOf(Object.values(THEME_CONTEXT)),
  divider: bool,
  heading: any.isRequired,
  help: bool,
  helpContent: any,
  strapline: string
};
PageHeading.defaultProps = {
  center: false,
  context: 'primary',
  divider: true,
  help: false,
  helpContent: '',
  strapline: ''
};
//# sourceMappingURL=pageHeading.js.map