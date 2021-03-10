/**
 * Badge - Props
 */

// React
import { node, oneOf, object, string } from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../theme/constants/context'
import { THEME_SIZE } from '../../theme/constants/size'

export const propTypes = {
  children: node,
  className: string,
  content: string.isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  icon: string,
  iconPrefix: string,
  shape: oneOf(['round', 'square']),
  size: oneOf(Object.values(THEME_SIZE)),
  style: object,
  to: string
}

export const defaultProps = {
  context: 'primary',
  shape: 'square',
  size: 'md'
}
