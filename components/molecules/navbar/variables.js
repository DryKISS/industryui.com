/**
 * Navbar - Variables
 */

// UI
import { COLOUR } from '../../theme/variables/colour'

export const NAVBAR = {
  // Navbar
  background: COLOUR.white,
  colourActive: COLOUR.dark,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',

  // Borders
  borderTopColor: COLOUR.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',

  // Overlay
  backgroundOverlay: COLOUR.white,
  heightOverlay: '100%',
  positionOverlay: 'fixed',
  widthOverlay: '100%',

  // Toggler
  colourToggler: COLOUR.dark,
  fontSizeToggler: '0.875',
  paddingToggler: '1.25rem 0 1.25rem 1rem',
  colourHoverToggler: COLOUR.primary,

  // Collapse
  positionCollapse: 'static',

  // Link
  paddingLink: '1rem 0.75rem',
  colourDefault: COLOUR.dark,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.dark,
  colourHoverDesktop: COLOUR.primary,

  // List
  fontSizeList: '0.875rem',

  // ListItem
  borderTopListItem: '1px solid #33475b',
  backgroundListItem: 'transparent',
  backgroundHoverListItem: COLOUR.light,
  borderBottomHoverListItem: 'none',
  justifyContentDesktopListItem: 'center',
  marginBottomDesktopListItem: 'inherit'
}
