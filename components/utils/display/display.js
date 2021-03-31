/**
 * Components - Utils - Display
 */

const themeDisplay = ({ dBlock, dFlex, dInline, dInlineBlock, dInlineFlex, dNone }) => {
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

export default themeDisplay
