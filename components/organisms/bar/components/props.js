/**
 * Components - Organisms - Bar - Components - Props
 */

// React
import { bool, node, number, oneOf, string } from 'prop-types'

// UI
import { BarConfig } from '../components/config'

export const BarPropTypes = {
  backdrop: bool,
  children: node,
  minSize: string,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  toggle: bool,
  variant: oneOf(['push', 'overlay']),
  width: number,
}

export const BarDefaultProps = {
  placement: 'left',
  variant: 'overlay',
  width: 10,
  toggle: true,
}
