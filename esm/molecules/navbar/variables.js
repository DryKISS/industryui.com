/**
 * Navbar - Variables
 */
// UI
import { THEME_COLOUR } from '../../theme/variables/colour';
export var NAVBAR = {
  // Navbar
  background: THEME_COLOUR.white,
  colourActive: THEME_COLOUR.dark,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',
  // Borders
  borderTopColor: THEME_COLOUR.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',
  borderBottom: "2px solid ".concat(THEME_COLOUR.light),
  // Overlay
  backgroundOverlay: THEME_COLOUR.white,
  heightOverlay: '100%',
  positionOverlay: 'fixed',
  widthOverlay: '100%',
  // Toggler
  colourToggler: THEME_COLOUR.dark,
  fontSizeToggler: '0.875',
  paddingToggler: '1.25rem 0 1.25rem 1rem',
  colourHoverToggler: THEME_COLOUR.primary,
  // Collapse
  positionCollapse: 'static',
  // Link
  paddingLink: '1rem 0.75rem',
  colourDefault: THEME_COLOUR.dark,
  colourHover: THEME_COLOUR.primary,
  colourDefaultDesktop: THEME_COLOUR.dark,
  colourHoverDesktop: THEME_COLOUR.primary,
  // List
  fontSizeList: '0.875rem',
  // ListItem
  borderTopListItem: '1px solid #33475b',
  backgroundListItem: 'transparent',
  backgroundHoverListItem: THEME_COLOUR.light,
  borderBottomHoverListItem: 'none',
  justifyContentDesktopListItem: 'center',
  marginBottomDesktopListItem: 'inherit'
};
//# sourceMappingURL=variables.js.map