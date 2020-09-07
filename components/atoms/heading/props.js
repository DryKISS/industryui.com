/**
 * Heading - Props
 */

// React
import { any, bool, object, objectOf, oneOf, oneOfType, number, string } from 'prop-types'

// UI
import { CONTEXT } from '../../'

export const HeadingPropTypes = {
  className: any,
  content: oneOfType([string, object]),
  context: oneOf(Object.values(CONTEXT)),
  noMargin: bool,
  noWrap: bool,
  style: objectOf(oneOfType([number, string])),
  tag: string
}

export const HeadingDefaultProps = {
  context: 'black',
  noWrap: false,
  tag: 'h1'
}
