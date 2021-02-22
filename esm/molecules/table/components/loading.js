/**
 * Components - Molecules - Loading
 */
// React
import React, { memo } from 'react';
import { bool, number } from 'prop-types'; // UI

import { LdsSpinner, PageLoading } from '../../../';
export var TableLoading = /*#__PURE__*/memo(function (_ref) {
  var colsLength = _ref.colsLength,
      show = _ref.show;

  if (!show) {
    return null;
  }

  return /*#__PURE__*/React.createElement(PageLoading, {
    indicator: /*#__PURE__*/React.createElement(LdsSpinner, {
      size: 50
    }),
    opacity: 0.7,
    position: "absolute"
  });
});
TableLoading.propTypes = {
  colsLength: number,
  show: bool
};
//# sourceMappingURL=loading.js.map