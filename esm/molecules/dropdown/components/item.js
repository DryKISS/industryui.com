import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Dropdown - Item
 */
// React
import React from 'react';
import { func, object, node } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { elementTypes, Icon, Link } from '../../../';

var renderItem = function renderItem(_ref, closeDropdown, onClick) {
  var id = _ref.id,
      name = _ref.name,
      to = _ref.to;

  var item = function item() {
    return /*#__PURE__*/React.createElement(StyledLink, {
      className: "dropdown--link",
      id: id,
      onClick: onClick
    }, name);
  };

  return to ? /*#__PURE__*/React.createElement(Link, {
    border: false,
    passHref: true,
    to: to
  }, item()) : item();
};

export var DropdownItem = function DropdownItem(_ref2) {
  var closeDropdown = _ref2.closeDropdown,
      elementType = _ref2.elementType,
      item = _ref2.item,
      _onClick = _ref2.onClick;

  switch (elementType) {
    case elementTypes.List:
      return /*#__PURE__*/React.createElement(StyledDropdownItem, {
        divider: item.divider
      }, item.divider ? /*#__PURE__*/React.createElement(StyledDivider, null) : renderItem(item, closeDropdown, _onClick));

    case elementTypes.Colour:
      return /*#__PURE__*/React.createElement(StyledColourItem, {
        colour: item.colour,
        onClick: function onClick() {
          _onClick(item);
        }
      });

    case elementTypes.Icon:
      return /*#__PURE__*/React.createElement(StyledIconItem, {
        onClick: _onClick
      }, /*#__PURE__*/React.createElement(Icon, {
        fixedWidth: false,
        icon: item === null || item === void 0 ? void 0 : item.icon,
        prefix: item === null || item === void 0 ? void 0 : item.prefix
      }));

    default:
      return 'invalid elementType';
  }
};
var StyledIconItem = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  height: 2rem;\n  line-height: 2rem;\n  text-align: center;\n  width: 2rem;\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.light;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.dark;
});
var StyledColourItem = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 2em;\n  width: 2rem;\n  ", "\n  ", "\n"])), function (_ref5) {
  var colour = _ref5.colour,
      theme = _ref5.theme;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n      }\n    "])), colour, theme.COLOUR.white);
}, function (_ref6) {
  var colour = _ref6.colour,
      theme = _ref6.theme;
  var size = '0.5rem';
  return colour === 'transparent' && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-image: linear-gradient(45deg, #808080 25%, transparent 25%),\n          linear-gradient(-45deg, #808080 25%, transparent 25%),\n          linear-gradient(45deg, transparent 75%, #808080 75%),\n          linear-gradient(-45deg, transparent 75%, #808080 75%);\n        background-size: ", " ", ";\n        background-position: 0 0, 0 ", ", ", " -", ", -", " 0px;\n      "])), size, size, size, size, size, size);
});
var StyledDropdownItem = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  line-height: 1.5;\n  white-space: nowrap;\n  ", "\n"])), function (_ref7) {
  var divider = _ref7.divider;
  return divider && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding: 0;\n    "])));
});
var StyledDivider = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-top: 1px solid #33475b;\n  height: 0;\n  margin: 0.5rem;\n  overflow: hidden;\n"])));
var StyledLink = styled.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: block;\n  padding: 0.25rem 1.5rem;\n  &:hover {\n    background-color: #f8f9fa;\n    color: inherit;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.primary;
});
DropdownItem.propTypes = {
  children: node,
  closeDropdown: func,
  item: object,
  onClick: func
};
//# sourceMappingURL=item.js.map