/**
 * Avatar - Props
 */

import { any, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

import { CONTEXT, SIZE } from '../../'

export const AvatarPropTypes = {
  action: node,
  actionClick: func,
  children: any,
  className: any,
  click: func,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  gmail: string,
  size: oneOf(Object.values(SIZE)),
  src: string,
  style: objectOf(oneOfType([number, string]))
}

export const AvatarDefaultProps = {
  context: 'primary',
  size: 'lg'
}
