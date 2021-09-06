/**
 * DryKiss Theme
 */

// Polished
import { tint } from 'polished'

const COLOUR = {
  white: '#ffffff',
  black: '#000000',

  dark: 'rgb(92, 111, 127)',
  light: 'rgb(236, 240, 243)',

  primary: '#0000ff',
  secondary: '#00FF00',
  success: 'rgb(54, 197, 58)',
  info: 'rgb(148, 148, 126)',
  warning: 'rgb(222, 127, 40)',
  danger: 'rgb(212, 81, 81)',

  help: 'rgb(255, 203, 68)',

  male: 'rgb(142, 206, 253)',
  female: 'rgb(248, 139, 157)',

  transparent: 'transparent'
}

const HEADINGS = {
  h1: {
    fontSize: '2rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h2: {
    fontSize: '1.75rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h3: {
    fontSize: '1.5rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h5: {
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  h6: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  }
}

const NAVBAR = {
  // Navbar
  background: COLOUR.transparent,
  borderTopWidth: '0.125rem',
  padding: '1rem 1rem 0 1rem',
  paddingTablet: '1rem 1rem 0 1.5rem',
  paddingDesktop: '1rem 1rem 0 3rem',

  // Overlay
  backgroundOverlay: tint(0.96, COLOUR.black),
  widthOverlay: '180px',

  // Toggler
  colourToggler: COLOUR.black,
  fontSizeToggler: '0.875',
  paddingToggler: '0.25rem 0',
  colourHoverToggler: COLOUR.success,

  // Collapse
  positionCollapse: 'fixed',

  // Link
  paddingLink: '0 1rem',
  colourDefault: COLOUR.black,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.black,
  colourHoverDesktop: COLOUR.primary,

  // List
  fontSizeList: '0.875rem',

  // ListItem
  borderTopListItem: 'none',
  backgroundListItem: COLOUR.transparent,
  justifyContentDesktopListItem: 'flex-start',
  marginBottomDesktopListItem: '1rem',
  backgroundHoverListItem: COLOUR.transparent,
  borderBottomHoverListItem: '2px solid #000'
}

const PAGE = {
  marginTop: '-1rem',
  backGroundColour: COLOUR.white
}

const THEME_TYPOGRAPHY = {
  fontColour: COLOUR.black,
  fontSizeBase: '1rem'
}

export const DryKISSTheme = {
  COLOUR,
  HEADINGS,
  NAVBAR,
  PAGE,
  THEME_TYPOGRAPHY
}
