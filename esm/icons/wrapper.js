import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Icons - Wrapper
 */
// React
import React from 'react'; // Style

import styled, { css } from 'styled-components';
export var IconWrapper = function IconWrapper(_ref) {
  var children = _ref.children,
      colour = _ref.colour,
      disabled = _ref.disabled,
      disabledColour = _ref.disabledColour,
      hoverColour = _ref.hoverColour,
      onClick = _ref.onClick,
      size = _ref.size,
      translate = _ref.translate,
      props = _objectWithoutProperties(_ref, ["children", "colour", "disabled", "disabledColour", "hoverColour", "onClick", "size", "translate"]);

  var mainSize = props.mainSize;

  if (typeof size === 'string') {
    var tmpSize = 22;

    switch (size) {
      case 'xxxs':
        tmpSize = 8;
        break;

      case 'xxs':
        tmpSize = 12;
        break;

      case 'xs':
        tmpSize = 16;
        break;

      case 'sm':
        tmpSize = 20;
        break;

      case 'md':
        tmpSize = 24;
        break;

      case 'lg':
        tmpSize = 32;
        break;

      case 'xl':
        tmpSize = 36;
        break;

      case 'xxl':
        tmpSize = 40;
        break;

      case 'xxxl':
        tmpSize = 48;
        break;

      default:
        tmpSize = 22;
        break;
    }

    size = tmpSize;
  } else {
    size = size || 22;
  }

  var scale = 1;

  if (mainSize && size !== mainSize) {
    scale = Number(size / mainSize);
  }

  return /*#__PURE__*/React.createElement(StyledSvg, _extends({
    colour: colour,
    disabled: disabled,
    disabledColour: disabledColour,
    hoverColour: hoverColour,
    onClick: onClick,
    scale: scale,
    size: size,
    translate: translate,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), children);
};
IconWrapper.displayName = "IconWrapper";
var states = {
  DEFAULT: 'default',
  HOVER: 'hover'
};

var setColour = function setColour(state, props) {
  var colour = props.colour,
      disabled = props.disabled,
      disabledColour = props.disabledColour,
      hoverColour = props.hoverColour,
      ICONS = props.theme.ICONS;

  if (state === states.DEFAULT) {
    return disabled && disabledColour ? disabledColour : disabled ? ICONS.disabledIconColour : colour || ICONS.defaultIconColour;
  }

  if (state === states.HOVER && hoverColour) {
    if (hoverColour === true) {
      hoverColour = ICONS.hoverIconColour;
    }

    return disabled && disabledColour ? disabledColour : disabled ? ICONS.disabledIconColour : hoverColour || ICONS.hoverIconColour || ICONS.defaultIconColour;
  }

  if (disabled) {
    return disabledColour || ICONS.disabledIconColour;
  }

  return colour || ICONS.defaultColour;
};

var StyledSvg = styled.svg(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  path {\n    transition: fill 0.2s ease;\n    fill: ", ";\n    ", "\n  }\n  &:hover {\n    path {\n      fill: ", ";\n    }\n  }\n  ", "\n"])), function (_ref2) {
  var size = _ref2.size;

  if (typeof size === 'number') {
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        height: ", "px;\n        width: ", "px;\n      "])), size, size);
  }
}, function (props) {
  return setColour(states.DEFAULT, props);
}, function (_ref3) {
  var scale = _ref3.scale,
      translate = _ref3.translate;
  return scale && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          transform: scale(", ") ", ";\n        "])), scale, translate || '');
}, function (props) {
  return setColour(states.HOVER, props);
}, function (_ref4) {
  var onClick = _ref4.onClick,
      disabled = _ref4.disabled;
  return onClick && !disabled && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      cursor: pointer;\n    "])));
});
//# sourceMappingURL=wrapper.js.map