/**
 * Divider - Props
 */

// React
import { any, number, oneOf } from 'prop-types'

// UI
import { CONTEXT, SIZE } from '../../'

export const DividerPropTypes = {
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  size: oneOf(Object.values(SIZE)),
  thickness: number
}

export const DividerDefaultProps = {
  context: 'light',
  size: 'md',
  thickness: 2
}
