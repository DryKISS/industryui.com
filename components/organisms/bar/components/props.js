/**
 * Components - Organisms - Bar - Components - Props
 */

// React
import { bool, node, number, oneOf, string } from 'prop-types'

// UI
import { BarConfig } from '../components/config'

export const BarPropTypes = {
  children: node,
  minSize: string,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  variant: oneOf(['push', 'overlay']),
  width: number,
  toggle: bool
}

export const BarDefaultProps = {
  placement: 'left',
  variant: 'overlay',
  width: 10,
  toggle: true
}
