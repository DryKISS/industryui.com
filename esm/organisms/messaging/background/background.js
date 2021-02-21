import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Messaging/Background
 */
// React
import { string } from 'prop-types'; // Style

import styled from 'styled-components';
export var MessageBackground = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  height: 100%;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])), function (_ref) {
  var path = _ref.path;
  return path;
});
MessageBackground.propTypes = {
  path: string
};
MessageBackground.defaultProps = {
  path: '/messaging/background.png'
};
//# sourceMappingURL=background.js.map