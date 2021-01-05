import { bool, func, number, string } from 'prop-types'

export const commonIconPropTypes = {
  colour: string,
  disabled: bool,
  disabledColour: string,
  fixColour: string,
  hoverColour: string,
  onClick: func,
  size: number
}
