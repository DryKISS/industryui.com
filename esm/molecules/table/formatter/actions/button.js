import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Components - Molecules - Table - Formatter - Actions - Button
 */
// React
import React, { forwardRef } from 'react';
import { array, bool, func, object, oneOf, oneOfType, string } from 'prop-types'; // Next

import Router from 'next/router'; // UI

import { Button } from '../../../../atoms/button/button/button';
import { Icon } from '../../../../atoms/icon/icon/icon';
import { TableActionsOverlay } from './overlay';
import { THEME_CONTEXT } from '../../../../theme/constants/context'; // Style

import styled from 'styled-components';
export var TableActionsButton = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var context = _ref.context,
      disabled = _ref.disabled,
      icon = _ref.icon,
      numberOverlay = _ref.numberOverlay,
      onClick = _ref.onClick,
      overlayCustom = _ref.overlayCustom,
      row = _ref.row,
      to = _ref.to;

  var handleClick = function handleClick(path) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      Router.push(path);
    };
  };

  var iconArray = Array.isArray(icon);
  var overlay = row[numberOverlay] || overlayCustom;
  var click = onClick ? function (e) {
    return onClick(e, row);
  } : handleClick("".concat(to, "?id=").concat(row.id));
  return /*#__PURE__*/React.createElement(StyledButton, {
    forwardedAs: "a",
    disabled: disabled,
    context: context,
    onClick: click,
    ref: ref,
    size: "sm"
  }, overlay && /*#__PURE__*/React.createElement(TableActionsOverlay, {
    children: overlay,
    context: context
  }), /*#__PURE__*/React.createElement(StyledIcon, {
    icon: icon ? iconArray ? icon[1] : icon : null,
    prefix: icon && iconArray && icon[0]
  }));
});
var StyledButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 0.5rem;\n  position: relative;\n"])));
var StyledIcon = styled(Icon)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  pointer-events: 'none';\n"])));
TableActionsButton.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  disabled: bool,
  icon: oneOfType([array, string]),
  numberOverlay: string,
  onClick: func,
  overlayCustom: string,
  row: object.isRequired,
  to: string
};
//# sourceMappingURL=button.js.map