/**
 * Components - Layouts - LayoutGrid
 */
// React
import React from 'react';
import { node } from 'prop-types'; // UI

import { LayoutGridWrapper } from './wrapper';
export var LayoutGrid = function LayoutGrid(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(LayoutGridWrapper, null, children);
};
LayoutGrid.displayName = "LayoutGrid";
LayoutGrid.propTypes = {
  children: node.isRequired
};
LayoutGrid.defaultProps = {};
//# sourceMappingURL=grid.js.map