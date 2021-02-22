import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Components - Atoms - Button - Props
 */
// React
import { bool, func, node, number, object, objectOf, oneOf, oneOfType, string } from 'prop-types'; // UI

import { DIMENSION_PROP_TYPES } from '../../../theme/utils/dimension';
import { DISPLAY_PROP_TYPES } from '../../../theme/utils/display';
import { SPACER_PROP_TYPES } from '../../../theme/utils/spacer';
import { THEME_CONTEXT } from '../../../theme/constants/context';
import { THEME_SIZE } from '../../../theme/constants/size';
export var propTypes = _objectSpread(_objectSpread(_objectSpread({
  block: bool,
  centre: bool,
  children: node,
  className: string,
  content: node,
  context: oneOf(Object.values(THEME_CONTEXT)),
  dashed: bool,
  disabled: bool,
  endIcon: string,
  endIconProps: object,
  onClick: func,
  outline: bool,
  shadow: bool,
  startIcon: string,
  startIconProps: object,
  size: oneOf(Object.values(THEME_SIZE)),
  style: objectOf(oneOfType([number, string])),
  type: oneOf(['button', 'reset', 'submit'])
}, DIMENSION_PROP_TYPES), DISPLAY_PROP_TYPES), SPACER_PROP_TYPES);
export var defaultProps = {
  context: 'primary',
  disabled: false,
  shadow: false,
  size: 'md',
  type: 'button'
};
//# sourceMappingURL=props.js.map