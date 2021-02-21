/**
 * Components - Molecules - Table - Formatter - Actions
 */
// React
import React from 'react';
import { array, arrayOf, bool, func, object, oneOf, oneOfType, shape, string } from 'prop-types'; // UI

import { ButtonToolbar } from '../../../../atoms/button/toolbar/toolbar';
import { THEME_CONTEXT } from '../../../../theme/constants/context';
import { TableActionsTooltip } from './tooltip';
import { TableActionsButton } from './button';
export var TableActions = function TableActions(_ref) {
  var align = _ref.align,
      row = _ref.row,
      data = _ref.data;
  return /*#__PURE__*/React.createElement(ButtonToolbar, {
    align: align
  }, data.map(function (_ref2, index) {
    var context = _ref2.context,
        disabled = _ref2.disabled,
        icon = _ref2.icon,
        numberOverlay = _ref2.numberOverlay,
        onClick = _ref2.onClick,
        overlayCustom = _ref2.overlayCustom,
        to = _ref2.to,
        tooltip = _ref2.tooltip;
    return /*#__PURE__*/React.createElement(TableActionsTooltip, {
      key: index,
      tooltip: tooltip
    }, /*#__PURE__*/React.createElement(TableActionsButton, {
      context: context,
      disabled: disabled,
      icon: icon,
      numberOverlay: numberOverlay,
      onClick: onClick,
      overlayCustom: overlayCustom,
      row: row,
      to: to
    }));
  }));
};
TableActions.displayName = "TableActions";
TableActions.propTypes = {
  align: oneOfType([string, bool]),
  data: arrayOf(shape({
    content: string,
    context: oneOf(Object.values(THEME_CONTEXT)),
    disabled: bool,
    icon: oneOfType([array, string]),
    numberOverlay: string,
    onClick: func,
    overlayCustom: string,
    to: string,
    tooltip: string
  })).isRequired,
  row: object.isRequired
};
TableActions.defaultProps = {
  align: 'flex-start'
};
//# sourceMappingURL=actions.js.map