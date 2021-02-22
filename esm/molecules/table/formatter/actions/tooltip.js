/**
 * Components - Molecules - Table - Formatter - Actions - Tooltip
 */
// React
import React from 'react';
import { node, string } from 'prop-types'; // UI

import { Tooltip } from '../../../../';
export var TableActionsTooltip = function TableActionsTooltip(_ref) {
  var children = _ref.children,
      tooltip = _ref.tooltip;
  return /*#__PURE__*/React.createElement(Tooltip, {
    content: tooltip
  }, children);
};
TableActionsTooltip.displayName = "TableActionsTooltip";
TableActionsTooltip.propTypes = {
  children: node.isRequired,
  tooltip: string.isRequired
};
//# sourceMappingURL=tooltip.js.map