/**
 * Cleverly Theme
 */

const THEME_TYPOGRAPHY  = {
  font: '"Lato Light", sans-serif',
  fontSizeBase: '1rem',
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
}

const BUTTON = {
  font: '"Lato Bold", sans-serif',
  fontSize: '1rem',
  textTransform: 'uppercase'
}

const PAGE = {
  backGroundColour: '#ebebeb'
}

const HEADINGS = {
  h1: {
    fontSize: '2rem',
    lineHeight: '1.25',
    textTransform: 'uppercase',
    fontFamily: '"Lato Bold", sans-serif'
  },
  h2: {
    fontSize: '1.75rem',
    lineHeight: '1.25',
    textTransform: 'uppercase',
    fontFamily: '"Lato Bold", sans-serif'
  },
  h3: {
    fontSize: '1.5rem',
    lineHeight: '1.25',
    textTransform: 'uppercase',
    fontFamily: '"Lato Bold", sans-serif'
  },
  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.25',
    textTransform: 'uppercase',
    fontFamily: '"Lato Bold", sans-serif'
  },
  h5: {
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: '"Lato Bold", sans-serif'
  },
  h6: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    textTransform: 'uppercase',
    fontFamily: '"Lato Bold", sans-serif'
  }
}

const COLOUR = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',

  dark: 'rgb(0, 55, 83)',
  light: 'rgb(236, 240, 243)',

  primary: 'rgb(117, 204, 207)',
  secondary: 'rgb(119, 200, 167)',
  success: 'rgb(0, 180, 60)',
  info: 'rgb(249, 156, 35)',
  warning: 'rgb(230, 8, 17)',
  danger: 'rgb(232, 9, 94)',

  help: 'rgb(255, 222, 3)',

  transparent: 'transparent'
}

const NAVBAR = {
  // Navbar
  background: COLOUR.dark,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',
  breakpoint: 'desktop',

  // Borders
  borderTopColor: COLOUR.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',
  borderBottom: `2px solid ${COLOUR.warning}`,

  // Caret
  caretColour: COLOUR.secondary,
  caretColourHover: COLOUR.secondary,

  // Collapse
  collapsePosition: 'static',

  // Dropdown
  dropdownActive: COLOUR.dark,
  dropdownBackground: COLOUR.dark,
  dropdownBackgroundHover: 'rgb(37, 51, 66)',
  dropdownColour: COLOUR.white,
  dropdownColourHover: COLOUR.primary,

  // Link
  paddingLink: '1rem 0.75rem',
  colourActive: COLOUR.white,
  colourDefault: COLOUR.white,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.white,
  colourHoverDesktop: COLOUR.primary,

  // List
  listBackground: COLOUR.dark,
  listFontSize: '0.875rem',

  // ListItem
  listItemBorderTop: '1px solid #33475b',
  listItemBackground: 'transparent',
  listItemBackgroundHover: 'rgb(37, 51, 66)',
  listItemBorderBottomHover: 'none',
  listItemJustifyContentDesktop: 'center',
  listItemMarginBottomDesktop: 'inherit',

  // Overlay
  overlayBackground: COLOUR.dark,
  overlayHeight: '100%',
  overlayPosition: 'fixed',
  overlayWidth: '100%',

  // Toggler
  togglerColour: COLOUR.white,
  togglerSize: '0.875',
  togglerPadding: '1.25rem 0 1.25rem 1rem',
  togglerHover: COLOUR.primary
}

const COPYRIGHT = {
  background: COLOUR.dark,
  colour: '#999'
}

const FOOTER = {
  background: COLOUR.dark,
  colour: COLOUR.white,
  colourHover: '#aaa',
  height: '8rem'
}

const LINK = {
  colour: COLOUR.primary,
  background: COLOUR.dark,
  colourActive: COLOUR.primary,
  colourHover: COLOUR.primary,
  height: '8rem'
}

const CleverlyTheme = {
  BUTTON,
  COLOUR,
  COPYRIGHT,
  FOOTER,
  HEADINGS,
  LINK,
  NAVBAR,
  PAGE,
  THEME_TYPOGRAPHY
}

export default CleverlyTheme
