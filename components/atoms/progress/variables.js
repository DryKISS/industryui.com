/**
 * Progress - Variables
 */

// UI
import { COLOUR } from '../../theme/variables/colour'

export const PROGRESS = {
  bgColor: COLOUR.light,
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
}

export const PROGRESSBAR = {
  bgImage: `
  linear-gradient(
    45deg,
    rgba(255,255,255,.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,.15) 50%,
    rgba(255,255,255,.15) 75%,
    transparent 75%,
    transparent
    )
    `,
  bgSize: '1rem 1rem',
  context: 'primary',
  role: 'progressbar',
  transition: 'width .6s ease'
}
