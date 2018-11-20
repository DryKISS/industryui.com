/**
 * Grid
 */
const breakpoints = {
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1224
}

const containerWidths = {
  md: [704, 32, 32],
  lg: [960, 24, 32],
  xl: [1144, 32, 40]
}

const gutterWidth = 24
const marginWidth = 24
const gridColumns = 12
const defaultScreenClass = 'lg'

const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128
]

const radius = 4

export const GRID = {
  breakpoints,
  containerWidths,
  defaultScreenClass,
  gutterWidth,
  gridColumns,
  marginWidth,
  radius,
  space
}
