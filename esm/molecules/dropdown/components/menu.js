import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

/**
 * Components - Molecules - Dropdown - Menu
 */
// React
import React from 'react';
import { array, func, oneOf } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { elementTypes, DropdownItem } from '../../../';
import { THEME_POSITION } from '../../../theme/constants/position';
export var DropdownMenu = function DropdownMenu(_ref) {
  var closeDropdown = _ref.closeDropdown,
      elementType = _ref.elementType,
      items = _ref.items,
      onItemClick = _ref.onItemClick,
      position = _ref.position;

  var handleClick = function handleClick(item) {
    onItemClick && onItemClick(item);
    closeDropdown();
  };

  return /*#__PURE__*/React.createElement(StyledDropdownMenu, {
    elementType: elementType,
    className: "dropdown--menu",
    position: position
  }, /*#__PURE__*/React.createElement(TooltipRectangle, {
    position: position
  }), /*#__PURE__*/React.createElement(TooltipRectangle, {
    position: position,
    border: true
  }), items.map(function (item) {
    return /*#__PURE__*/React.createElement(DropdownItem, {
      closeDropdown: closeDropdown,
      elementType: elementType,
      item: item,
      key: item.id,
      onClick: function onClick() {
        return handleClick(item);
      }
    });
  }));
};
DropdownMenu.displayName = "DropdownMenu";
var StyledDropdownMenu = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #fff;\n  ", "\n  border-radius: 0.25rem;\n  left: 0;\n  margin-top: 1px;\n  min-width: 8rem;\n  padding: 0.5rem 0;\n  position: absolute;\n  top: 100%;\n  z-index: 2;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);\n  ", "\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), theme.DROPDOWN.BORDER_COLOUR);
}, function (_ref3) {
  var position = _ref3.position;
  return position && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      left: ", ";\n      right: ", ";\n      ", "\n    "])), position === THEME_POSITION.Right ? 'auto' : '0', position === THEME_POSITION.Right ? '0' : 'auto', position === THEME_POSITION.Top && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        bottom: 100%;\n        top: unset;\n      "]))));
}, function (_ref4) {
  var elementType = _ref4.elementType;
  return (elementType === elementTypes.Colour || elementType === elementTypes.Icon) && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;\n        display: grid;\n        padding: 5px;\n        grid-template-columns: repeat(8, 2rem);\n        grid-template-rows: repeat(3, 2rem);\n      "])));
});
var dist = '0.625rem';
var size = '0.875rem';
var TooltipRectangle = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  border-image: initial;\n  border-style: solid;\n  border-width: 0.438rem;\n  position: absolute;\n\n  ", "\n"])), function (_ref5) {
  var border = _ref5.border;
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border-color: transparent transparent\n      ", ";\n  "])), border ? 'rgb(255, 255, 255)' : 'rgb(103,103,103)');
}, function (_ref6) {
  var position = _ref6.position,
      border = _ref6.border;

  switch (position) {
    case THEME_POSITION.Bottom:
      return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          top: calc(-", " - ", ");\n          left: ", ";\n        "])), size, border ? '0px' : '1px', dist);

    case THEME_POSITION.Top:
      return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          bottom: calc(-", " - ", ");\n          left: ", ";\n          transform: rotateX(180deg);\n        "])), size, border ? '0px' : '1px', dist);

    case THEME_POSITION.Left:
      return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          display: none; /*remove when initial left position is resolved */\n          bottom: ", ";\n          right: calc(-", " - ", ");\n          transform: rotateZ(90deg);\n        "])), size, size, border ? '0px' : '1px');

    case THEME_POSITION.Right:
      return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          display: none; /*remove when initial left position is resolved */\n          bottom: ", ";\n          left: calc(-", " - ", ");\n          transform: rotateZ(-90deg);\n        "])), size, size, border ? '0px' : '1px');

    default:
      break;
  }
});
DropdownMenu.propTypes = {
  closeDropdown: func,
  items: array.isRequired,
  onItemClick: func,
  position: oneOf([THEME_POSITION.Top, THEME_POSITION.Right, THEME_POSITION.Bottom, THEME_POSITION.Left])
};
//# sourceMappingURL=menu.js.map