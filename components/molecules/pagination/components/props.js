/**
 * Pagination - Props
 */
import { any, func, number, string, bool, oneOfType, node, oneOf } from 'prop-types'
import { CONTEXT, SIZE } from '../../../'

export const PaginationPropTypes = {
  breakCount: number,
  children: any,
  context: oneOf(Object.values(CONTEXT)),
  currentPage: number,
  hideWhenOnlyOnePage: bool,
  nextLabel: oneOfType([string, node]),
  onPageChange: func,
  pageCount: number,
  prevLabel: oneOfType([string, node]),
  showNextAndPrev: bool,
  size: oneOf(Object.values(SIZE))
}

export const PaginationDefaultProps = {
  breakCount: 5,
  currentPage: 1,
  hideWhenOnlyOnePage: true,
  nextLabel: 'Next',
  onPageChange: () => {},
  pageCount: 1,
  prevLabel: 'Previous'
}
