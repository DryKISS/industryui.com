/**
 * Tooltip - Props
 */

// React
import { node, oneOf } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

export const TooltipPropTypes = {
  children: node,
  content: node,
  context: oneOf(Object.values(CONTEXT))
}

export const TooltipDefaultProps = {
  context: 'black'
}
