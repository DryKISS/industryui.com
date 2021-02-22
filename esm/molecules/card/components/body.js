import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Card - Body
 */
// React
import React from 'react';
import { bool, func, node, oneOf, string } from 'prop-types'; // UI

import { Heading } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
import { CardCTA } from './cta'; // Style

import styled from 'styled-components';
export var CardBody = function CardBody(_ref) {
  var center = _ref.center,
      children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      ctaFunc = _ref.ctaFunc,
      ctaLink = _ref.ctaLink,
      ctaTitle = _ref.ctaTitle,
      showCta = _ref.showCta,
      title = _ref.title,
      titleNoWrap = _ref.titleNoWrap;
  return /*#__PURE__*/React.createElement(StyledBody, {
    className: className,
    center: center
  }, title && /*#__PURE__*/React.createElement(StyledWrapper, null, /*#__PURE__*/React.createElement(StyledTitle, {
    content: title,
    noWrap: titleNoWrap,
    tag: "h2"
  })), (children || showCta) && /*#__PURE__*/React.createElement(StyledContent, {
    context: context
  }, children, showCta && /*#__PURE__*/React.createElement(CardCTA, {
    func: ctaFunc,
    link: ctaLink,
    title: ctaTitle
  })));
};
CardBody.displayName = "CardBody";
var StyledBody = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var center = _ref2.center;
  return center && "\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    flex: 1 1 auto;\n    text-align: center;\n  ";
});
var StyledWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var StyledTitle = styled(Heading)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 24px auto 16px auto;\n  text-align: center;\n  width: 75%;\n"])));
var StyledContent = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 1rem;\n"])));
CardBody.propTypes = {
  center: bool,
  children: node,
  className: string,
  context: oneOf(Object.values(THEME_CONTEXT)),
  ctaFunc: func,
  ctaLink: string,
  ctaTitle: string,
  showCta: bool,
  title: string,
  titleNoWrap: bool
};
CardBody.defaultProps = {
  context: 'primary',
  showCta: false
};
//# sourceMappingURL=body.js.map