/**
 * Components - Atoms - Avatar Stack - Props
 */

// React
import { any, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import THEME_SIZE from '../../../constants/size'

export const propTypes = {
  children: any,
  className: any,
  limit: number,
  style: objectOf(oneOfType([number, string]))
}
