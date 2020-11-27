/**
 * Details - Props
 */

// React
import { bool, node, number, object, oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../..'

export const DetailsPropTypes = {
  animationDuration: number,
  children: node,
  content: node,
  contentStyle: object,
  context: oneOf(Object.values(CONTEXT)),
  disableAnimation: bool,
  endActionComponent: node,
  iconComponent: node,
  open: bool,
  startActionComponent: node,
  style: object,
  title: string.isRequired,
  toolbar: node,
  uniqueId: string,
  unmountContentOnClose: bool
}

export const DetailsDefaultProps = {
  context: 'primary',
  open: false
}
