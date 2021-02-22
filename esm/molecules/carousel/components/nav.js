import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Carousel nav
 */
// React
import React from 'react';
import { func, oneOf, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
import { Icon } from '../../..';
export var Carouselnav = function Carouselnav(_ref) {
  var clickFunction = _ref.clickFunction,
      context = _ref.context,
      direction = _ref.direction,
      icon = _ref.icon,
      position = _ref.position;
  return /*#__PURE__*/React.createElement(StyledContainer, {
    direction: direction,
    onClick: clickFunction
  }, /*#__PURE__*/React.createElement(Stylednav, {
    context: context,
    icon: icon,
    position: position
  }));
};
Carouselnav.displayName = "Carouselnav";
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  ", "\n  background: linear-gradient(", "deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0) 100%);\n  height: 100%;\n  width: 80px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 1;\n  padding: 1rem 0;\n\n  &:hover {\n    background: linear-gradient(\n      ", "deg,\n      rgba(0, 0, 0, 0.2) 0%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n"])), function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'left' ? 'left: 0;' : 'right: 0;';
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction === 'left' ? 90 : 270;
}, function (_ref4) {
  var direction = _ref4.direction;
  return direction === 'left' ? 90 : 270;
});
var Stylednav = styled(Icon)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  align-self: center;\n\n  ", "\n\n  ", "\n\n  && {\n    font-size: 2rem;\n  }\n"])), function (_ref5) {
  var context = _ref5.context,
      COLOUR = _ref5.theme.COLOUR;
  return COLOUR[context];
}, function (_ref6) {
  var position = _ref6.position;
  return position === 'top' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      align-self: flex-start;\n    "])));
}, function (_ref7) {
  var position = _ref7.position;
  return position === 'bottom' && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      align-self: flex-end;\n    "])));
});
Carouselnav.propTypes = {
  clickFunction: func.isRequired,
  context: string.isRequired,
  direction: oneOf(['left', 'right']).isRequired,
  icon: string.isRequired,
  position: string.isRequired
};
//# sourceMappingURL=nav.js.map