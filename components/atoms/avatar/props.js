/**
 * Components - Atoms - Avatar - Props
 */

// React
import {
  any,
  func,
  node,
  number,
  objectOf,
  oneOf,
  oneOfType,
  string
} from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../theme/constants/context'
import { THEME_SIZE } from '../../theme/constants/size'

export const propTypes = {
  action: node,
  actionClick: func,
  children: any,
  className: any,
  click: func,
  content: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  gmail: string,
  size: oneOf(Object.values(THEME_SIZE)),
  src: string,
  style: objectOf(oneOfType([number, string]))
}

export const defaultProps = {
  context: 'primary',
  size: 'lg'
}
