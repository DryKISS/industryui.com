/**
 * Atoms - Link - Props
 */

// React
import { any, bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../theme/constants/context'

export const propTypes = {
  border: bool,
  children: node.isRequired,
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  onClick: func,
  passHref: bool,
  replace: bool,
  scroll: bool,
  shallow: bool,
  target: string,
  to: oneOfType([object, string]).isRequired
}

export const defaultProps = {
  border: true,
  context: THEME_CONTEXT.DARK,
  replace: false,
  scroll: true,
  shallow: false
}
