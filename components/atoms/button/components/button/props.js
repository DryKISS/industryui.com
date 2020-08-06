import { bool, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import {
  CONTEXT,
  DIMENSION_PROP_TYPES,
  DISPLAY_PROP_TYPES,
  SIZE,
  SPACER_PROP_TYPES
} from '../../../../'

export const ButtonPropTypes = {
  block: bool,
  centre: bool,
  children: node,
  className: string,
  content: node,
  context: oneOf(Object.values(CONTEXT)),
  disabled: bool,
  onClick: func,
  outline: bool,
  shadow: bool,
  size: oneOf(Object.values(SIZE)),
  style: objectOf(oneOfType([number, string])),
  type: oneOf(['button', 'reset', 'submit']),
  ...DIMENSION_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
  ...SPACER_PROP_TYPES
}

export const ButtonDefaultProps = {
  context: 'primary',
  disabled: false,
  type: 'button'
}
