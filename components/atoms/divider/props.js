/**
 * Atoms - Divider - Props
 */

// React
import { any, number, oneOf } from 'prop-types'

// UI
import THEME_CONTEXT from '../../constants/context'
import THEME_SIZE from '../../constants/size'

export const propTypes = {
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  size: oneOf(Object.values(THEME_SIZE)),
  thickness: number
}

export const defaultProps = {
  context: 'light',
  size: 'md',
  thickness: 2
}
