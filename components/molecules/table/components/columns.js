/**
 * Components - Molecules - Table - Columns
 */

// React
import React, { memo } from 'react'
import { array, bool, func, shape, string } from 'prop-types'

// UI
import { Icon, TableHead } from '../../../'

const RenderColumns = ({ align, columns, setSort, sort }) =>
  columns.map(({ hidden, sortable, sortName = '', text }, index) => {
    if (hidden) {
      return
    }

    const hasSort = sort.item === sortName

    const handleSort = () => {
      if (sortable) {
        if (hasSort && sort.order === 'desc') {
          setSort({
            item: null,
            order: null
          })
        } else {
          setSort({
            item: sortName,
            order: hasSort ? 'desc' : 'asc'
          })
        }
      }
    }

    return (
      <TableHead align={align} key={index} onClick={handleSort} sortable={sortable}>
        {text}
        {sortable && hasSort && (
          <Icon icon={sort.order === 'asc' ? 'caret-down' : 'caret-up'} prefix='fas' />
        )}
      </TableHead>
    )
  })

export const TableColumns = memo(({ align, columns, setSort, sort }) => (
  <thead>
    <tr>
      <RenderColumns align={align} columns={columns} setSort={setSort} sort={sort} />
    </tr>
  </thead>
))

TableColumns.propTypes = {
  align: bool,
  columns: array,
  setSort: func,
  sort: shape({
    item: string,
    order: string
  })
}

TableColumns.defaultProps = {
  align: false,
  columns: [],
  sort: {}
}
