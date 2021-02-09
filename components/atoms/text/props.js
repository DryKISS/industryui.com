// React
import { bool, node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, DISPLAY_PROP_TYPES, SIZE, SPACER_PROP_TYPES } from '../../'

export const TextPropTypes = {
  align: string,
  bold: bool,
  children: node,
  content: string,
  context: oneOf(Object.values(CONTEXT)),
  size: oneOf(Object.values(SIZE)),
  weight: oneOf(['light', 'regular', 'semiBold', 'bold']),
  ...DISPLAY_PROP_TYPES,
  ...SPACER_PROP_TYPES
}

export const TextDefaultProps = {
  context: 'dark',
  size: 'md'
}
