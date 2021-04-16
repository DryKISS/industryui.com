/**
 * Components - Molecules - Table - Pagination
 */

// React
import React, { memo, useEffect } from 'react'
import { number, oneOfType, string } from 'prop-types'

// UI
import { SelectField } from '../../../form/select/select'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

const Items = [
  {
    text: '25',
    value: 25
  },
  {
    text: '50',
    value: 50
  },
  {
    text: '100',
    value: 100
  },
  {
    text: 'All',
    value: Infinity
  }
]

const TablePaginationSize = memo(({ handlePaginationSize, perPage }) => {
  const [getPageSize, setPageSize] = useLocalStorage('pageSize')

  let def = perPage

  useEffect(() => {
    if (getPageSize) {
      def = getPageSize.pageSize
    }

    handlePaginationSize(def)
  }, [])

  const pagineSizeChangeHandler = (size) => {
    setPageSize({ pageSize: size.target.value })
    handlePaginationSize(size.target.value)
  }

  return (
    <SelectField
      name="pageSize"
      errors={{}}
      defaultValue={getPageSize ? getPageSize.pageSize : `${def}`}
      onChange={pagineSizeChangeHandler}
      options={Items}
    />
  )
})

TablePaginationSize.propTypes = {
  perPage: oneOfType([number, string])
}

TablePaginationSize.defaultProps = {
  perPage: 50
}

export default TablePaginationSize
