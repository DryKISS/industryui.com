/**
 * Components - Atoms - Details2 - Props
 */

// React
import { bool, node, number, object, oneOf, string } from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../theme/constants/context'

export const Details2PropTypes = {
  animationDuration: number,
  children: node,
  content: node,
  contentStyle: object,
  context: oneOf(Object.values(THEME_CONTEXT)),
  disableAnimation: bool,
  endActionComponent: node,
  fitParentHeight: bool,
  iconComponent: node,
  open: bool,
  startActionComponent: node,
  style: object,
  title: string.isRequired,
  toolbar: node,
  uniqueId: string,
  unmountContentOnClose: bool,
}

export const Details2DefaultProps = {
  animationDuration: 100,
  context: 'primary',
  disableAnimation: false,
  fitParentHeight: false,
  iconComponent: false,
  open: false,
  unmountContentOnClose: false,
}
