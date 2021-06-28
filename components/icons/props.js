/**
 * Components - Icons - Props
 */
import { iconNameList } from './rawIcons'

// React
import { bool, func, number, oneOf, oneOfType, string } from 'prop-types'

export const propTypes = {
  colour: string,
  disabled: bool,
  disabledColour: string,
  fixColour: string,
  hoverColour: oneOfType([bool, string]),
  onClick: func,
  size: oneOfType([number, string])
}

export const lazyIconPropTypes = {
  iconName: oneOf(iconNameList),
  ...propTypes
}
