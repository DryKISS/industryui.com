/**
 * Components - Atoms - Details2 - Props
 */

// React
import { bool, node, number, object, oneOf, string } from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../theme/constants/context'

export const propTypes = {
  animationDuration: number,
  children: node,
  content: node,
  contentStyle: object,
  context: oneOf(Object.values(THEME_CONTEXT)),
  disableAnimation: bool,
  fitParentHeight: bool,
  iconComponent: node,
  open: bool,
  style: object,
  title: string.isRequired,
  toolbar: node,
  uniqueId: string,
  unmountContentOnClose: bool
}

export const defaultProps = {
  animationDuration: 100,
  context: 'primary',
  disableAnimation: false,
  fitParentHeight: true,
  iconComponent: null,
  open: false,
  unmountContentOnClose: false
}
