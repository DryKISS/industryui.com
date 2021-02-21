import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Card - Decks
 * A set of equal width and height cards that aren’t attached.
 */
// React
import React from 'react';
import { node } from 'prop-types'; // UI

import { MEDIA_QUERY } from '../../../'; // Style

import styled from 'styled-components';
export var CardDecks = function CardDecks(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledDecks, null, children);
};
CardDecks.displayName = "CardDecks";
var StyledDecks = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", "\n"])), MEDIA_QUERY.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    flex-flow: row wrap;\n    margin-left: -15px;\n    margin-right: -15px;\n  "]))));
CardDecks.propTypes = {
  children: node.isRequired
};
//# sourceMappingURL=decks.js.map