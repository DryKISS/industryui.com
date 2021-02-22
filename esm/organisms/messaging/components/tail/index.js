import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Messaging/Tail
 */
// React
import { oneOf } from 'prop-types'; // Style

import styled from 'styled-components';
export var Tail = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: ", ";\n  background-repeat: no-repeat;\n  bottom: 8px;\n  height: 16px;\n  position: absolute;\n  ", "\n  width: 12px;\n"])), function (_ref) {
  var type = _ref.type;
  return type === 'in' ? "url('/messaging/tail-incoming.svg')" : "url('/messaging/tail-outgoing.svg')";
}, function (_ref2) {
  var type = _ref2.type;
  return type === 'in' ? 'left: 11px;' : 'right: 11px;';
});
Tail.propTypes = {
  type: oneOf(['in', 'out']).isRequired
};
//# sourceMappingURL=index.js.map