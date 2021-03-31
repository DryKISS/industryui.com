/**
 * Components - Atoms - Text - Props
 */

// React
import { bool, node, oneOf, string } from 'prop-types'

// UI
import DISPLAY_PROP_TYPES from '../../utils/display/props'
import SPACER_PROP_TYPES from '../../utils/spacer/props'
import THEME_CONTEXT from '../../constants/context'
import THEME_SIZE from '../../constants/size'

export const propTypes = {
  align: string,
  className: string,
  children: node,
  content: string,
  context: oneOf(Object.values(THEME_CONTEXT)),
  size: oneOf(Object.values(THEME_SIZE)),
  stroked: bool,
  weight: oneOf(['light', 'regular', 'semiBold', 'bold']),
  ...DISPLAY_PROP_TYPES,
  ...SPACER_PROP_TYPES
}

export const defaultProps = {
  context: 'dark',
  size: 'md',
  stroked: false
}
