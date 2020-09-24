// React
import { node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, DISPLAY_PROP_TYPES, SIZE, SPACER_PROP_TYPES } from '../../'

export const TextPropTypes = {
  align: string,
  children: node,
  content: string,
  context: oneOf(Object.values(CONTEXT)),
  size: oneOf(Object.values(SIZE)),
  ...DISPLAY_PROP_TYPES,
  ...SPACER_PROP_TYPES
}

export const TextDefaultProps = {
  context: 'black',
  size: 'md'
}
