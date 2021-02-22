/**
 * Progress - Variables
 */
// UI
import { THEME_COLOUR } from '../../theme/variables/colour';
export var PROGRESS = {
  bgColor: THEME_COLOUR.light,
  borderRadius: '.25rem',
  fontSize: {
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },
  height: {
    xs: '.15rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
};
export var PROGRESSBAR = {
  bgImage: "\n  linear-gradient(\n    45deg,\n    rgba(255,255,255,.15) 25%,\n    transparent 25%,\n    transparent 50%,\n    rgba(255,255,255,.15) 50%,\n    rgba(255,255,255,.15) 75%,\n    transparent 75%,\n    transparent\n    )\n    ",
  bgSize: '1rem 1rem',
  context: 'primary',
  role: 'progressbar',
  transition: 'width .6s ease'
};
//# sourceMappingURL=variables.js.map