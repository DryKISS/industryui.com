/**
 * Theme - MaiTai
 */

const COLOUR = {
  dark: 'rgb(0, 55, 83)',
  light: 'rgb(236, 240, 243)',

  white: '#fff',
  black: 'rgb(0, 0, 0)',
  gray: '#333333',

  primary: '#5da7e5',
  secondary: 'rgb(210,50,81)',
  success: 'rgb(0, 180, 60)',
  info: 'rgb(249, 156, 35)',
  warning: 'rgb(230, 8, 17)',
  danger: 'rgb(232, 9, 94)',
  transparentInfo: 'rgba(241,165,33,.75)',
  help: 'rgb(255, 222, 3)'
}

const COPYRIGHT = {
  background: COLOUR.gray,
  colour: COLOUR.white
}

const FOOTER = {
  background: COLOUR.black,
  colour: COLOUR.white
}

const NAVBAR = {
  // Navbar
  background: COLOUR.white,
  borderTopWidth: '0',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0',

  // Overlay
  backgroundOverlay: COLOUR.primary,
  widthOverlay: '220px',

  // Toggler
  colourToggler: COLOUR.black,
  fontSizeToggler: '0.875',
  paddingToggler: '0.25rem 0',
  colourHoverToggler: COLOUR.black,

  // Collapse
  positionCollapse: 'fixed',

  // Link
  paddingLink: '0.5rem',
  colourDefault: COLOUR.black,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.black,
  colourHoverDesktop: COLOUR.primary,

  // List
  fontSizeList: '16px',

  // ListItem
  borderTopListItem: 'none',
  backgroundListItem: COLOUR.transparent,
  justifyContentDesktopListItem: 'flex-start',
  marginBottomDesktopListItem: 'none',
  backgroundHoverListItem: COLOUR.transparent,
  borderBottomHoverListItem: 'none'
}

const fonts = {
  gillLight: "'Gill Sans MT Light'",
  gillBold: "'Gill Sans MT'",
  sansSerif: 'sans-serif'
}

export const HEADINGS = {
  h1: {
    fontFamily: fonts.gillBold,
    fontSize: '3rem',
    lineHeight: '1.25',
    textTransform: 'uppercase'
  },
  h2: {
    fontFamily: fonts.gillBold,
    fontSize: '2.25rem',
    lineHeight: '1',
    textTransform: 'uppercase'
  },
  h3: {
    fontFamily: fonts.gillBold,
    fontSize: '1.875rem',
    lineHeight: '1',
    textTransform: 'uppercase'
  },
  h4: {
    fontFamily: fonts.gillBold,
    fontSize: '1.5rem',
    lineHeight: '1.75',
    textTransform: 'uppercase'
  },
  h5: {
    fontFamily: fonts.gillBold,
    fontSize: '1.25rem',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  },
  h6: {
    fontFamily: fonts.gillBold,
    fontSize: '1.125rem',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  }
}

const THEME_TYPOGRAPHY = {
  font: fonts.gillLight,
  fontFamilies: fonts,
  fontColour: COLOUR.black,
  fontSizeBase: '1rem'
}

export const Theme = {
  COLOUR,
  COPYRIGHT,
  FOOTER,
  HEADINGS,
  NAVBAR,
  THEME_TYPOGRAPHY
}
