import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Caption
 */
// React
import { any, node, number, objectOf, oneOfType, string, oneOf } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { THEME_CONTEXT } from '../../theme/constants/context';
export var FigureCaption = styled.figcaption(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n  border-radius: 0 0 0.25rem 0.25rem;\n  font-size: 90%;\n  margin-top: -2px;\n  padding: 0.5rem;\n"])), function (_ref) {
  var context = _ref.context,
      theme = _ref.theme;
  return theme.COLOUR[context];
}, function (_ref2) {
  var bgContext = _ref2.bgContext,
      theme = _ref2.theme;
  return theme.COLOUR[bgContext];
});
FigureCaption.propTypes = {
  bgContext: oneOf(Object.values(THEME_CONTEXT)),
  children: node,
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  style: objectOf(oneOfType([number, string]))
};
FigureCaption.defaultProps = {
  bgContext: THEME_CONTEXT.DARK,
  context: THEME_CONTEXT.WHITE
};
//# sourceMappingURL=caption.js.map