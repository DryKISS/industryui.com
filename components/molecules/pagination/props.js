/**
 * Pagination - Props
 */

// React
import { any, func, number, string, bool, oneOfType, node, oneOf } from 'prop-types'

// UI
import THEME_CONTEXT from '../../constants/context'
import THEME_SIZE from '../../constants/size'

export const propTypes = {
  breakCount: number,
  children: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  currentPage: number,
  hideWhenOnlyOnePage: bool,
  nextLabel: oneOfType([string, node]),
  onPageChange: func,
  pageCount: number,
  prevLabel: oneOfType([string, node]),
  showNextAndPrev: bool,
  size: oneOf(Object.values(THEME_SIZE))
}

export const defaultProps = {
  breakCount: 5,
  currentPage: 1,
  hideWhenOnlyOnePage: true,
  nextLabel: 'Next',
  onPageChange: () => {},
  pageCount: 1,
  prevLabel: 'Previous'
}
