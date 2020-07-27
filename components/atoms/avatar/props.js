/**
 * Avatar - Props
 */

import { any, func, node, number, object, objectOf, oneOf, oneOfType, string } from 'prop-types'

import { CONTEXT, SIZE } from '../../'

export const AvatarPropTypes = {
  action: node,
  actionClick: func,
  actionProps: object,
  children: any,
  click: func,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([number, string])),
  size: oneOf(Object.values(SIZE))
}

export const AvatarDefaultProps = {
  context: 'primary',
  size: 'lg'
}
