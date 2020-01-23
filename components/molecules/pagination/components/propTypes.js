import { any, func, number, string, bool, oneOfType, node, oneOf } from 'prop-types'
import { CONTEXT, SIZE } from '../../../'

export const PaginationPropTypes = {
  children: any,
  context: oneOf(Object.values(CONTEXT)),
  currentPage: number,
  nextLabel: oneOfType([string, node]),
  onPageChange: func.isRequired,
  pageCount: number,
  prevLabel: oneOfType([string, node]),
  showNextAndPrev: bool,
  size: oneOf(Object.values(SIZE))
}
