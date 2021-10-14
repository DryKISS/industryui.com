/**
 * Components - Molecules - Table - Props
 */

// React
import { array, bool, func, oneOfType, number, shape, string } from 'prop-types'

const propTypes = {
  align: oneOfType([string, bool]),
  border: bool,
  caption: string,
  className: string,
  columns: array,
  draggableRows: bool,
  fullHeight: bool,
  hover: bool,
  loading: bool,
  onRowOrderChange: func,
  pagination: bool,
  paginationProps: shape({
    currentPage: number,
    onPageChange: func,
    onPageSizeChange: func,
    pageCount: number,
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

export default propTypes
