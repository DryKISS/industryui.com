/**
 * Tooltip - Props
 */

import { node, oneOf } from 'prop-types'

import { CONTEXT } from '../../../'

export const TooltipPropTypes = {
  children: node,
  content: node,
  context: oneOf(Object.values(CONTEXT))
}

export const TooltipDefaultProps = {
  context: 'primary'
}
