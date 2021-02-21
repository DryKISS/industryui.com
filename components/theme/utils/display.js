/**
 * Components - Theme - Utils - Dimension
 */

// React
import { bool } from 'prop-types'

export const themeDisplay = ({
  dBlock,
  dFlex,
  dInline,
  dInlineBlock,
  dInlineFlex,
  dNone
}) => {
  let display = null

  if (dBlock) {
    display = 'block'
  }

  if (dFlex) {
    display = 'flex'
  }

  if (dInline) {
    display = 'inline'
  }

  if (dInlineBlock) {
    display = 'inline-block'
  }

  if (dInlineFlex) {
    display = 'inline-flex'
  }

  if (dNone) {
    display = 'none'
  }

  return display ? `display: ${display} !important;` : ''
}

export const DISPLAY_PROP_TYPES = {
  dBlock: bool,
  dFlex: bool,
  dInline: bool,
  dInlineBlock: bool,
  dInlineFlex: bool,
  dNone: bool
}
