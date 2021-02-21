import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Navbar — Widgets — Collapse
 */
// React
import { bool } from 'prop-types'; // UI

import { MEDIA_QUERY } from '../../../../'; // Style

import styled from 'styled-components';
export var NavCollapse = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex-basis: 100%;\n  flex-grow: 1;\n  display: ", ";\n  position: ", ";\n  right: ", ";\n  margin: ", ";\n  ", "\n"])), function (props) {
  return props.visible ? 'block' : 'none';
}, function (_ref) {
  var theme = _ref.theme;
  return theme.NAVBAR.positionCollapse;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.positionCollapse === 'fixed' ? '0' : 'inherit';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.positionCollapse === 'fixed' ? '2.5rem 2rem' : 'inherit';
}, MEDIA_QUERY.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: none;\n    display: flex;\n    flex-basis: auto;\n    position: static;\n    margin: inherit;\n  "]))));
NavCollapse.propTypes = {
  visible: bool.isRequired
};
//# sourceMappingURL=collapse.js.map