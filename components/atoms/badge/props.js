/**
 * Badge - Props
 */

import { node, oneOf, object, string } from 'prop-types'

import { CONTEXT, SIZE } from '../../'

export const BadgePropTypes = {
  children: node,
  className: string,
  content: string.isRequired,
  context: oneOf(Object.values(CONTEXT)),
  icon: string,
  iconPrefix: string,
  size: oneOf(Object.values(SIZE)),
  style: object,
  to: string
}

export const BadgeDefaultProps = {
  context: 'primary',
  size: 'md'
}
