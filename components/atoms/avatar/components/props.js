/**
 * Components - Atoms - Avatar - Props
 */

// React
import { any, bool, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import THEME_CONTEXT from '../../../constants/context'
import THEME_SIZE from '../../../constants/size'

export const propTypes = {
  action: oneOfType([bool, string]),
  alt: string,
  children: any,
  className: any,
  click: func,
  content: oneOfType([bool, string]),
  context: oneOf(Object.values(THEME_CONTEXT)),
  email: string,
  radius: oneOfType([number, oneOf(Object.values(THEME_SIZE))]),
  size: oneOf(Object.values(THEME_SIZE)),
  src: string,
  style: objectOf(oneOfType([number, string]))
}

export const defaultProps = {
  action: false,
  content: false,
  context: 'primary',
  size: 'md'
}
