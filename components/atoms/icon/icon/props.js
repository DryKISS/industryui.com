/**
 * Icon - Props
 */

// React
import { any, bool, number, object, array, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { DISPLAY_PROP_TYPES } from '../../../theme/utils/display'
import { SPACER_PROP_TYPES } from '../../../theme/utils/spacer'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import { ICON_PULL } from '../constants/pull'
import { ICON_PREFIX } from '../constants/prefix'
import { ICON_SIZE } from '../constants/size'

export const propTypes = {
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
  swapOpacity: bool,
  ...DISPLAY_PROP_TYPES,
  ...SPACER_PROP_TYPES
}

export const defaultProps = {
  fixedWidth: true,
  prefix: 'fas'
}
