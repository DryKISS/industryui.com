/**
 * Components - Organisms - Bar - Props
 */

// React
import { bool, number, oneOf, string } from 'prop-types'

// UI
import { BarConfig } from '../components/config'

export const BarPropTypes = {
  children: string,
  minSize: string,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  variant: oneOf(['push', 'overlay']),
  width: number,
  withToggle: bool
}

export const BarDefaultProps = {
  placement: 'left',
  variant: 'push',
  width: 10,
  withToggle: true
}
