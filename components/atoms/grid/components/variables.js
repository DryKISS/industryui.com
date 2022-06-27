/**
 * Components - Atoms - Grid - Variables
 */
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1600
}

const containerWidths = {
  sm: 544,
  md: 720,
  lg: 1008,
  xl: 1152,
  xxl: 1536
}

const gridColumns = 12
const gutterWidth = 32

const defaultScreenClass = 'sm'

const space = [0, 4, 8, 16, 32, 64, 128]

const radius = 4

const GRID = {
  breakpoints,
  containerWidths,
  defaultScreenClass,
  gutterWidth,
  gridColumns,
  radius,
  space
}

export default GRID
