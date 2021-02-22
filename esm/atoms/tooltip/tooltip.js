import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Atoms - Tooltip
 */
// Style
import styled from 'styled-components'; // Tippy

import Tippy from '@tippyjs/react'; // UI

import { themeBackground } from '../../theme/utils/background';
import { defaultProps, propTypes } from './props';
export var Tooltip = styled(Tippy)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  && {\n    ", "\n\n    .tippy-content {\n      padding: 8px;\n    }\n\n    .tippy-arrow::before {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return themeBackground(props);
}, function (_ref) {
  var context = _ref.context,
      theme = _ref.theme;
  return theme.COLOUR[context];
});
Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
//# sourceMappingURL=tooltip.js.map