/**
 * Components - Molecules - Table - Columns
 */

// React
import React, { memo } from 'react'
import { array, bool, func, oneOfType, shape, string } from 'prop-types'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import TableHead from './head'

const handleSort = ({ hasSort, sort, setSort, sortName }) => {
  setSort({
    item: sortName,
    order: sort.order === 'asc' ? 'desc' : 'asc'
  })
}

const RenderColumns = ({ align, columns, setSort, sort }) =>
  columns.map(({ hidden, sortName, text }, index) => {
    if (hidden) {
      return false
    }

    const hasSort = sort?.item === sortName

    return (
      <TableHead
        align={align}
        key={index}
        onClick={() => sortName && handleSort({ hasSort, sort, setSort, sortName })}
        sortName={sort && sortName}
      >
        {text}

        {sort && sortName && (
          <>
            {hasSort && <Icon icon={sort.order === 'asc' ? 'caret-down' : 'caret-up'} />}
            {!hasSort && <Icon icon="sort" />}
          </>
        )}
      </TableHead>
    )
  })

const TableColumns = memo(({ align, columns, setSort, sort }) => (
  <thead>
    <tr>
      <RenderColumns align={align} columns={columns} setSort={setSort} sort={sort} />
    </tr>
  </thead>
))

TableColumns.propTypes = {
  align: oneOfType([string, bool]),
  columns: array.isRequired,
  setSort: func,
  sort: shape({
    item: string,
    order: string
  })
}

TableColumns.defaultProps = {
  align: false
}

export default TableColumns
