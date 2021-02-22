import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Progress - Bar Div
 */
// React
import { number, string, bool } from 'prop-types'; // Style

import styled, { css, keyframes } from 'styled-components'; // UI

import { themeBackground } from '../../../theme/utils/background';
var ProgressBarStripesAnimation = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    background-position: 1rem 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n"])));
export var ProgressBarDiv = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  animation: ", ";\n  background-image: ", ";\n  background-size: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  text-align: center;\n  transition: ", ";\n  white-space: nowrap;\n  width: ", ";\n"])), function (props) {
  return themeBackground(props);
}, function (_ref) {
  var animated = _ref.animated;
  return animated ? css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          ", " 1s linear infinite\n        "])), ProgressBarStripesAnimation) : 'none 0 ease 0 1 normal none running';
}, function (_ref2) {
  var striped = _ref2.striped,
      bgImage = _ref2.theme.PROGRESSBAR.bgImage;
  return striped ? bgImage : 'none';
}, function (_ref3) {
  var striped = _ref3.striped,
      bgSize = _ref3.theme.PROGRESSBAR.bgSize;
  return striped ? bgSize : 'auto';
}, function (_ref4) {
  var color = _ref4.color,
      context = _ref4.context,
      theme = _ref4.theme;
  return color || (context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white);
}, function (_ref5) {
  var transition = _ref5.theme.PROGRESSBAR.transition;
  return transition;
}, function (_ref6) {
  var now = _ref6.now;
  return now + '%';
});
ProgressBarDiv.propTypes = {
  animated: bool,
  bgImage: string,
  bgSize: string,
  now: number,
  striped: bool,
  transition: string
};
//# sourceMappingURL=progressBarDiv.js.map