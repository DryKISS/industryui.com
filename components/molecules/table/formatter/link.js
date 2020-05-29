/**
 * Table - Formatter - Link
 */

// React
import React from 'react'
import { object } from 'prop-types'

// Next
import Router from 'next/router'

// UI
import { StyledLink } from '../../../'

export const TableLink = (path, key, value, account) => ({ row }) => {
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()

    if (account) {
      path = `${path}/${row.type.toLowerCase()}s/view`
    }

    Router.push(`${path}?id=${row[key]}`)
  }

  const item = row[value]

  // Debug
  // console.log(path, key, account, row)
  // console.log('Value', item)

  return (
    <>
      {item === '-' && '-'}
      {item !== '-' && (
        <StyledLink border={false} onClick={handleClick}>
          {item}
        </StyledLink>
      )}
    </>
  )
}

TableLink.propTypes = {
  row: object.isRequired
}
