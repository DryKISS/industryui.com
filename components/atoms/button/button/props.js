/**
 * Components - Atoms - Button - Props
 */

// React
import { bool, func, node, number, object, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { DIMENSION_PROP_TYPES } from '../../../theme/utils/dimension'
import { DISPLAY_PROP_TYPES } from '../../../theme/utils/display'
import { SPACER_PROP_TYPES } from '../../../theme/utils/spacer'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import { THEME_SIZE } from '../../../theme/constants/size'

export const propTypes = {
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
  type: oneOf(['button', 'reset', 'submit']),
  ...DIMENSION_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
  ...SPACER_PROP_TYPES,
}

export const defaultProps = {
  context: 'primary',
  disabled: false,
  shadow: false,
  size: 'md',
  type: 'button',
}
