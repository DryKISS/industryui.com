/**
 * Components - Molecules - Table - Props
 */

// React
import { array, bool, func, oneOfType, number, shape, string } from 'prop-types'

export const propTypes = {
  align: oneOfType([string, bool]),
  border: bool,
  caption: string,
  className: string,
  columns: array,
  fullHeight: bool,
  hover: bool,
  loading: bool,
  pagination: bool,
  paginationProps: shape({
    currentPage: number,
    onPageChange: func,
    onPageSizeChange: func,
    perPage: oneOfType([number, string])
  }),
  paginationSize: bool,
  responsive: bool,
  rowClick: func,
  rows: array.isRequired,
  setSort: func,
  sort: shape({
    item: string,
    order: string
  }),
  striped: bool
}

export const defaultProps = {
  align: false,
  border: true,
  caption: '',
  className: 'Table',
  fullHeight: false,
  hover: true,
  loading: undefined,
  noData: true,
  pagination: false,
  paginationSize: true,
  responsive: true,
  striped: true
}
