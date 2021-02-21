import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Hero - Buttons
 */
// React
import React from 'react';
import { array } from 'prop-types'; // UI

import { Button, Link } from '../../../'; // Style

import styled from 'styled-components';
export var HeroButtons = function HeroButtons(_ref) {
  var buttons = _ref.buttons;
  return buttons.map(function (_ref2, index) {
    var content = _ref2.content,
        context = _ref2.context,
        to = _ref2.to;
    return /*#__PURE__*/React.createElement(StyledLink, {
      border: false,
      to: to,
      key: index
    }, /*#__PURE__*/React.createElement(StyledButton, {
      content: content,
      context: context,
      size: "lg"
    }));
  });
};
var StyledButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"])));
var StyledLink = styled(Link)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n"])));
HeroButtons.propTypes = {
  buttons: array
};
//# sourceMappingURL=buttons.js.map