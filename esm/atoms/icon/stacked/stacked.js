/**
 * Atoms - Icon - Stacked
 */
// React
import React from 'react';
import { string } from 'prop-types'; // UI

import { Icon } from '../../../';
export var IconStacked = function IconStacked(_ref) {
  var icon = _ref.icon,
      prefix = _ref.prefix;
  return /*#__PURE__*/React.createElement("span", {
    className: "fa-stack fa-1x",
    style: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "fa-stack-2x",
    color: "#eaf0f6",
    fixedWidth: false,
    icon: "circle",
    prefix: "fas"
  }), /*#__PURE__*/React.createElement(Icon, {
    className: "fa-stack-1x",
    color: "#506e91",
    fixedWidth: false,
    icon: icon,
    prefix: prefix
  }));
};
IconStacked.displayName = "IconStacked";
IconStacked.propTypes = {
  icon: string.isRequired,
  prefix: string
};
IconStacked.defaultProps = {
  prefix: 'fas'
};
//# sourceMappingURL=stacked.js.map