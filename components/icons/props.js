/**
 * Components - Icons - Props
 */

// React
import { bool, func, number, oneOfType, string } from 'prop-types'

// UI
// import { iconNameList } from './rawIcons'

const propTypes = {
  colour: string,
  disabled: bool,
  disabledColour: string,
  fixColour: string,
  hoverColour: oneOfType([bool, string]),
  onClick: func,
  size: oneOfType([number, string])
}

// export const lazyIconPropTypes = {
//   iconName: oneOf(iconNameList),
//   ...propTypes
// }

export default propTypes
