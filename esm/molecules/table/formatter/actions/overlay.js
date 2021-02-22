import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Table - Formatter - Actions - Overlay
 */
// React
import { number, oneOf, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { THEME_CONTEXT } from '../../../../theme/constants/context';
export var TableActionsOverlay = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid white;\n  border-radius: 50%;\n  color: #fff;\n  display: block;\n  font-size: 0.75rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  position: absolute;\n  right: -0.75rem;\n  text-align: center;\n  top: -0.75rem;\n  width: 1.5rem;\n  z-index: 1;\n"])), function (_ref) {
  var context = _ref.context,
      COLOUR = _ref.theme.COLOUR;
  return COLOUR[context];
});
TableActionsOverlay.propTypes = {
  background: oneOf(Object.values(THEME_CONTEXT)),
  children: oneOfType([number, string]).isRequired
};
//# sourceMappingURL=overlay.js.map