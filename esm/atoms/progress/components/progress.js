import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Atoms - Progress
 */
// React
import { oneOf } from 'prop-types'; // Styled

import styled from 'styled-components'; // UI

import { THEME_SIZE } from '../../../theme/constants/size';
export var Progress = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  font-size: ", ";\n  height: ", ";\n  overflow: hidden;\n"])), function (_ref) {
  var theme = _ref.theme,
      bgColor = _ref.theme.PROGRESS.bgColor;
  return bgColor;
}, function (_ref2) {
  var borderRadius = _ref2.theme.PROGRESS.borderRadius;
  return borderRadius;
}, function (_ref3) {
  var size = _ref3.size,
      fontSize = _ref3.theme.PROGRESS.fontSize;
  return fontSize[size];
}, function (_ref4) {
  var size = _ref4.size,
      height = _ref4.theme.PROGRESS.height;
  return height[size];
});
Progress.propTypes = {
  size: oneOf(Object.values(THEME_SIZE))
};
Progress.defaultProps = {
  size: 'md'
};
//# sourceMappingURL=progress.js.map