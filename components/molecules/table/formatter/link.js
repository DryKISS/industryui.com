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

  return (
    <StyledLink border={false} onClick={handleClick}>
      {row[value]}
    </StyledLink>
  )
}

TableLink.propTypes = {
  row: object.isRequired
}
