/**
 * Theme - Cleverly Admin
 */

const THEME_TYPOGRAPHY = {
  font: '"Archivo", sans-serif',
  fontSizeBase: '1rem;',
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
}

const COLOUR = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0 ,0)',

  dark: 'rgb(0, 55, 83)',
  light: 'rgb(236, 240, 243)',

  primary: 'rgb(0, 204, 188)',
  secondary: 'rgb(6, 121, 216)',
  success: 'rgb(0, 180, 60)',
  info: 'rgb(249, 156, 35)',
  warning: 'rgb(230, 8, 17)',
  danger: 'rgb(232, 9, 94)',

  help: 'rgb(255, 222, 3)',

  male: 'rgb(142, 206, 253)',
  female: 'rgb(248, 139, 157)',

  transparent: 'transparent'
}

const COPYRIGHT = {
  background: COLOUR.dark,
  colour: '#999'
}

const FOOTER = {
  background: COLOUR.dark,
  colour: COLOUR.white
}

const NAVBAR = {
  // Navbar
  background: COLOUR.dark,
  colourActive: COLOUR.white,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',

  // Borders
  borderTopColor: COLOUR.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',

  // Overlay
  backgroundOverlay: COLOUR.dark,
  heightOverlay: '100%',
  positionOverlay: 'fixed',
  widthOverlay: '100%',

  // Toggler
  colourToggler: COLOUR.white,
  fontSizeToggler: '0.875',
  paddingToggler: '1.25rem 0 1.25rem 1rem',
  colourHoverToggler: COLOUR.primary,

  // Collapse
  positionCollapse: 'static',

  // Link
  paddingLink: '1rem 0.75rem',
  colourDefault: COLOUR.white,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.white,
  colourHoverDesktop: COLOUR.primary,

  // List
  fontSizeList: '0.875rem',

  // ListItem
  borderTopListItem: '1px solid #33475b',
  backgroundListItem: 'transparent',
  backgroundHoverListItem: 'rgb(37, 51, 66)',
  borderBottomHoverListItem: 'none',
  justifyContentDesktopListItem: 'center',
  marginBottomDesktopListItem: 'inherit'
}

const LINK = {
  colour: COLOUR.primary
}

export const CleverlyAdminTheme = {
  COLOUR,
  COPYRIGHT,
  FOOTER,
  LINK,
  NAVBAR,
  THEME_TYPOGRAPHY
}
