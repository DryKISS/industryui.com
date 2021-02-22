import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Card
 */
// React
import React from 'react'; // UI

import { Close, Icon, Link, MEDIA_QUERY } from '../../../';
import { CardBody, CardFooter, CardHeader, CardImage } from './';
import { CardPropTypes, CardDefaultProps } from './props'; // Style

import styled from 'styled-components';
export var Card = function Card(_ref) {
  var alt = _ref.alt,
      body = _ref.body,
      bordered = _ref.bordered,
      center = _ref.center,
      children = _ref.children,
      className = _ref.className,
      close = _ref.close,
      context = _ref.context,
      ctaFunc = _ref.ctaFunc,
      ctaLink = _ref.ctaLink,
      ctaTitle = _ref.ctaTitle,
      deck = _ref.deck,
      footer = _ref.footer,
      footerContext = _ref.footerContext,
      header = _ref.header,
      headerAlign = _ref.headerAlign,
      headerContext = _ref.headerContext,
      icon = _ref.icon,
      image = _ref.image,
      rounded = _ref.rounded,
      shadow = _ref.shadow,
      showCta = _ref.showCta,
      style = _ref.style,
      title = _ref.title,
      titleNoWrap = _ref.titleNoWrap,
      to = _ref.to;

  var linked = function linked() {
    return /*#__PURE__*/React.createElement(Link, {
      border: false,
      passHref: true,
      to: to
    }, card());
  };

  var card = function card() {
    return /*#__PURE__*/React.createElement(StyledCard, {
      bordered: bordered,
      className: className,
      context: context,
      deck: deck,
      rounded: rounded,
      shadow: shadow,
      style: style
    }, close && /*#__PURE__*/React.createElement(Close, {
      click: close
    }), image && /*#__PURE__*/React.createElement(CardImage, {
      alt: alt,
      src: image
    }), header && /*#__PURE__*/React.createElement(CardHeader, {
      align: headerAlign,
      content: header,
      context: headerContext
    }), icon && /*#__PURE__*/React.createElement(StyledIcon, {
      icon: icon,
      size: "4x"
    }), (title || body) && /*#__PURE__*/React.createElement(CardBody, {
      center: center,
      children: body,
      context: context,
      ctaFunc: ctaFunc,
      ctaLink: ctaLink,
      ctaTitle: ctaTitle,
      showCta: showCta,
      title: title,
      titleNoWrap: titleNoWrap
    }), children, footer && /*#__PURE__*/React.createElement(CardFooter, {
      children: footer,
      context: footerContext
    }));
  };

  return to ? linked() : card();
};
var StyledCard = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-clip: border-box;\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-size: inherit;\n  margin: 0;\n  min-width: 0;\n  position: relative;\n  word-wrap: break-word;\n  overflow: hidden;\n\n  ", "\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
}, function (_ref3) {
  var bordered = _ref3.bordered;
  return bordered && '1px solid rgba(0, 0, 0, .125)';
}, function (_ref4) {
  var rounded = _ref4.rounded;
  return rounded && '0.25rem';
}, function (_ref5) {
  var shadow = _ref5.shadow;
  return shadow && '0px 8px 10px rgba(24, 37, 50, 0.1), 0px 0px 1px rgba(24, 37, 50, 0.08)';
}, function (_ref6) {
  var context = _ref6.context,
      theme = _ref6.theme;
  return context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white;
}, function (_ref7) {
  var deck = _ref7.deck;
  return deck && MEDIA_QUERY.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 1 0 calc(100%/3 - 30px);\n    flex-direction: column;\n    margin-right: 15px;\n    margin-left: 15px;\n  "])));
});
var StyledIcon = styled(Icon)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 1rem auto;\n"])));
Card.propTypes = CardPropTypes;
Card.defaultProps = CardDefaultProps;
//# sourceMappingURL=card.js.map