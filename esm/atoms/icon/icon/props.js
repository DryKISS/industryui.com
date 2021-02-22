import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Icon - Props
 */
// React
import { any, bool, number, object, array, objectOf, oneOf, oneOfType, string } from 'prop-types'; // UI

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
import { ICON_PULL, ICON_PREFIX, ICON_SIZE } from '../constants';
export var IconPropTypes = _objectSpread(_objectSpread({
  border: bool,
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  mask: oneOfType([object, array, string]),
  fixedWidth: bool,
  inverse: bool,
  icon: oneOfType([object, array, string.isRequired]),
  listItem: bool,
  prefix: oneOf(Object.values(ICON_PREFIX)),
  pull: oneOf(Object.values(ICON_PULL)),
  pulse: bool,
  size: oneOf(Object.values(ICON_SIZE)),
  spin: bool,
  style: objectOf(oneOfType([number, string])),
  title: string,
  transform: oneOfType([string, object]),
  swapOpacity: bool
}, DISPLAY_PROP_TYPES), SPACER_PROP_TYPES);
export var IconDefaultProps = {
  fixedWidth: true,
  prefix: 'fas'
};
//# sourceMappingURL=props.js.map