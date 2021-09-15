/**
 * Navbar - Variables
 */

// UI
import THEME_COLOUR from '../../../constants/colour'

const NAVBAR = {
  // Navbar
  background: THEME_COLOUR.white,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',
  breakpoint: 'desktop',

  // Borders
  borderTopColor: THEME_COLOUR.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',
  borderBottom: `2px solid ${THEME_COLOUR.light}`,

  // Caret
  caretColour: THEME_COLOUR.secondary,
  caretColourHover: THEME_COLOUR.secondary,

  // Collapse
  collapsePosition: 'static',

  // Dropdown
  dropdownActive: THEME_COLOUR.white,
  dropdownBackground: THEME_COLOUR.white,
  dropdownBackgroundHover: THEME_COLOUR.light,
  dropdownColour: THEME_COLOUR.dark,
  dropdownColourHover: THEME_COLOUR.dark,

  // Link
  paddingLink: '1rem 0.75rem',
  colourActive: THEME_COLOUR.dark,
  colourDefault: THEME_COLOUR.dark,
  colourHover: THEME_COLOUR.dark,
  colourDefaultDesktop: THEME_COLOUR.dark,
  colourHoverDesktop: THEME_COLOUR.primary,

  // List
  listBackground: THEME_COLOUR.white,
  listFontSize: '0.875rem',

  // ListItem
  listItemBorderTop: '1px solid #33475b',
  listItemBackground: 'transparent',
  listItemBackgroundHover: THEME_COLOUR.light,
  listItemBorderBottomHover: 'none',
  listItemJustifyContentDesktop: 'center',
  listItemMarginBottomDesktop: 'inherit',

  // Overlay
  overlayBackground: THEME_COLOUR.white,
  overlayHeight: '100%',
  overlayPosition: 'fixed',
  overlayWidth: '100%',

  // Toggler
  togglerColour: THEME_COLOUR.dark,
  togglerSize: '0.875',
  togglerPadding: '1.25rem 0 1.25rem 1rem',
  togglerHover: THEME_COLOUR.dark
}

export default NAVBAR
