import PropTypes from 'prop-types'

export const DISPLAY = ({ dBlock, dFlex, dInline, dInlineBlock, dInlineFlex, dNone }) => {
  let display = null
  if (dBlock) display = 'block'
  if (dFlex) display = 'flex'
  if (dInline) display = 'inline'
  if (dInlineBlock) display = 'inline-block'
  if (dInlineFlex) display = 'inline-flex'
  if (dNone) display = 'none'

  return display ? `display: ${display} !important;` : ''
}

export const DISPLAY_PROP_TYPES = {
  dBlock: PropTypes.bool,
  dFlex: PropTypes.bool,
  dInline: PropTypes.bool,
  dInlineBlock: PropTypes.bool,
  dInlineFlex: PropTypes.bool,
  dNone: PropTypes.bool
}
