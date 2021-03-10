/**
 * Components - Atoms - Tooltip - Props
 */

// React
import { node, oneOf } from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../theme/constants/context'

export const propTypes = {
  children: node,
  content: node,
  context: oneOf(Object.values(THEME_CONTEXT)),
}

export const defaultProps = {
  context: THEME_CONTEXT.DARK,
}
