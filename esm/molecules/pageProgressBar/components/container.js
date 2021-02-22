/**
 * Molecules - Page Progress Bar - Container
 */
// React
import React from 'react';
import { bool, node, number } from 'prop-types';
export var Container = function Container(_ref) {
  var children = _ref.children,
      isFinished = _ref.isFinished,
      animationDuration = _ref.animationDuration;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: "opacity ".concat(animationDuration, "ms linear")
    }
  }, children);
};
Container.displayName = "Container";
Container.propTypes = {
  animationDuration: number.isRequired,
  children: node.isRequired,
  isFinished: bool.isRequired
};
//# sourceMappingURL=container.js.map