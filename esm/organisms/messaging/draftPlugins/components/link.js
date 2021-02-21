import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject;

/**
 * Components - Organisms - Messaging - Draft Plugins - Components - Link
 */
// React
import React from 'react'; // Style

import styled from 'styled-components';
export var LinkPluginComponent = function LinkPluginComponent(props) {
  return /*#__PURE__*/React.createElement(StyledA, _extends({}, props, {
    onClick: function onClick() {}
  }));
};
LinkPluginComponent.displayName = "LinkPluginComponent";
var StyledA = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref) {
  var MESSAGING = _ref.theme.MESSAGING;
  return MESSAGING.linkColour;
});
//# sourceMappingURL=link.js.map