import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Hero
 */
// React
import React from 'react';
import { any, array, number, object, oneOfType, string } from 'prop-types'; // UI

import { Container, Column, Heading, MEDIA_QUERY, Row } from '../../';
import { HeroButtons, HeroImage } from './components'; // Style

import styled from 'styled-components';
export var Hero = function Hero(_ref) {
  var alt = _ref.alt,
      align = _ref.align,
      background = _ref.background,
      backgroundSize = _ref.backgroundSize,
      buttons = _ref.buttons,
      children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      image = _ref.image,
      message = _ref.message,
      strapline = _ref.strapline,
      textblock = _ref.textblock,
      title = _ref.title,
      width = _ref.width;

  var renderLeft = function renderLeft() {
    return /*#__PURE__*/React.createElement(StyledColumn, {
      md: 6
    }, title && /*#__PURE__*/React.createElement(StyledTitle, {
      tag: "h1",
      content: title
    }), strapline && /*#__PURE__*/React.createElement(StyledStrapline, {
      tag: "h2",
      content: strapline
    }), buttons && /*#__PURE__*/React.createElement(HeroButtons, {
      buttons: buttons
    }), message && /*#__PURE__*/React.createElement("p", {
      children: message
    }));
  };

  return /*#__PURE__*/React.createElement(StyledHero, {
    background: background,
    backgroundSize: backgroundSize,
    className: className,
    height: height
  }, children && children, !children && /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, title && renderLeft(), image && /*#__PURE__*/React.createElement(HeroImage, {
    alt: alt,
    align: align,
    image: image,
    width: width
  }))));
};
Hero.displayName = "Hero";
var StyledHero = styled.header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: ", ";\n  background-position: center;\n  background-size: ", ";\n  height: ", ";\n  padding: 2rem 0 0;\n  position: relative;\n"])), function (_ref2) {
  var background = _ref2.background;
  return background ? "url(".concat(background, ")") : 'none';
}, function (_ref3) {
  var backgroundSize = _ref3.backgroundSize;
  return backgroundSize;
}, function (_ref4) {
  var height = _ref4.height;
  return height;
});
var StyledColumn = styled(Column)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  text-align: center;\n  ", "\n"])), MEDIA_QUERY.desktop(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: initial;\n  "]))));
var StyledTitle = styled(Heading)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  line-height: 2.75rem;\n  ", "\n"])), MEDIA_QUERY.desktop(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size: 3rem;\n    line-height: 3.25rem;\n  "]))));
var StyledStrapline = styled(Heading)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1.25rem;\n  font-weight: normal;\n  line-height: 1.5rem;\n  margin: 0 0 2rem 0;\n"])));
Hero.propTypes = {
  alt: string,
  align: string,
  className: any,
  background: string,
  backgroundSize: string,
  buttons: array,
  height: string,
  image: string,
  strapline: oneOfType([object, string]),
  title: string,
  width: number
};
Hero.defaultProps = {
  align: 'flex-end',
  backgroundSize: 'cover',
  style: {}
};
//# sourceMappingURL=hero.js.map