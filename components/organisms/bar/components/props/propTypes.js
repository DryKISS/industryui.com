/**
 * Components - Organisms - Bar - Components - Props
 */

// React
import { bool, node, number, oneOf, string } from 'prop-types'

// UI
import BarConfig from '../config'

const propTypes = {
  backdrop: bool,
  children: node,
  minSize: string,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  toggle: bool,
  variant: oneOf(['push', 'overlay']),
  width: number
}

export default propTypes
