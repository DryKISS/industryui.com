/**
 * Icon - Props
 */

// React
import { any, bool, number, object, array, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import { ICON_PULL, ICON_PREFIX, ICON_SIZE } from '../constants'

export const IconPropTypes = {
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

export const IconDefaultProps = {
  fixedWidth: true,
  prefix: 'fas'
}
