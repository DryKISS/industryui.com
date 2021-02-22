import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Toggle - Components - Toggle
 */
// React
import React, { useState, useEffect } from 'react';
import { bool, func, oneOf } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Switch } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
export var Toggle = function Toggle(_ref) {
  var context = _ref.context,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      size = _ref.size,
      initial = _ref.toggled;

  var _useState = useState(initial),
      _useState2 = _slicedToArray(_useState, 2),
      toggled = _useState2[0],
      setToggled = _useState2[1];

  useEffect(function () {
    setToggled(initial);
  }, [initial]);

  var handleToggle = function handleToggle() {
    onToggle && onToggle(!toggled);
    setToggled(!toggled);
  };

  return /*#__PURE__*/React.createElement(StyledToggle, null, /*#__PURE__*/React.createElement(Switch, {
    context: context,
    disabled: disabled,
    handleToggle: !disabled && handleToggle,
    size: size,
    toggled: toggled
  }));
};
Toggle.displayName = "Toggle";
var StyledToggle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n"])));
Toggle.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  disabled: bool,
  onToggle: func,
  size: oneOf(['sm', 'md', 'lg']),
  toggled: bool
};
Toggle.defaultProps = {
  context: 'success',
  size: 'md',
  toggled: false
};
//# sourceMappingURL=toggle.js.map