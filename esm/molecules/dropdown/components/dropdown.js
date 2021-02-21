import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2;

/**
 * Components - Molecules - Dropdown
 */
// React
import React, { useEffect, useRef, useState } from 'react';
import { array, bool, func, node, oneOf, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { DropdownMenu, Icon } from '../../../';
import { THEME_POSITION } from '../../../theme/constants/position';
export var elementTypes = {
  Colour: 'colour',
  List: 'list',
  Icon: 'icon'
};
export var Dropdown = function Dropdown(_ref) {
  var caret = _ref.caret,
      className = _ref.className,
      children = _ref.children,
      elementType = _ref.elementType,
      items = _ref.items,
      onChange = _ref.onChange,
      defaultOpen = _ref.defaultOpen,
      position = _ref.position;

  var _useState = useState(defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var node = useRef();

  var handleClickAway = function handleClickAway(event) {
    if (node.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(function () {
    if (open) {
      document.addEventListener('mousedown', handleClickAway);
    } else {
      document.removeEventListener('mousedown', handleClickAway);
    }

    return function () {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement(StyledDropdown, {
    className: className,
    ref: node
  }, /*#__PURE__*/React.createElement(StyledToggle, {
    className: "".concat(open ? 'dropdown--active' : '', " dropdown--toggle"),
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, children, caret && /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    className: "dropdown--caret",
    icon: position === THEME_POSITION.Top ? 'caret-up' : 'caret-down',
    prefix: "fas"
  }), items && open && /*#__PURE__*/React.createElement(DropdownMenu, {
    closeDropdown: function closeDropdown() {
      return setOpen(false);
    },
    elementType: elementType !== null && elementType !== void 0 ? elementType : elementTypes.List,
    items: items,
    position: position,
    onItemClick: onChange
  })));
};
Dropdown.displayName = "Dropdown";
var StyledDropdown = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n"])));
var StyledToggle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.5;\n  text-decoration: none;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourActive;
});
Dropdown.propTypes = {
  caret: bool,
  children: node,
  className: string,
  elementType: oneOf([elementTypes.Colour, elementTypes.Icon, elementTypes.List]),
  items: array.isRequired,
  onChange: func,
  position: string
};
Dropdown.defaultProps = {
  caret: true,
  position: 'left'
};
//# sourceMappingURL=dropdown.js.map