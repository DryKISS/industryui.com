/**
 * Atoms - Link - Props
 */

// React
import { any, bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { CONTEXT } from '../../'

export const LinkPropTypes = {
  border: bool,
  children: node.isRequired,
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  onClick: func,
  passHref: bool,
  prefetch: bool,
  replace: bool,
  scroll: bool,
  shallow: bool,
  target: string,
  to: oneOfType([object, string]).isRequired
}

export const LinkDefaultProps = {
  border: true,
  prefetch: true,
  replace: false,
  scroll: true,
  shallow: false
}
