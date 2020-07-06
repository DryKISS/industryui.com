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

// Style
import styled from 'styled-components'

export const TableLink = (path, key, value, account) => ({ row }) => {
  let skipLink = false
  if (account && ['admin', 'tenant'].includes(row.type.toLowerCase())) skipLink = true

  const getPath = () => {
    let url = path

    if (account) {
      url = `${path}/${row.type.toLowerCase()}s/view`
    }

    return `${url}?id=${row[key]}`
  }

  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    Router.push(getPath())
  }

  const item = row[value]

  // Debug
  // console.log(path, key, account, row)
  // console.log('Value', item)

  return skipLink ? (
    item
  ) : (
    <>
      {item === '-' && '-'}
      {item !== '-' && (
        <StyleLink border={false} href={getPath()} onClick={handleClick}>
          {item}
        </StyleLink>
      )}
    </>
  )
}

const StyleLink = styled(StyledLink)`
  &:hover {
    background: #ddd;
    margin: -8px;
    padding: 8px;
  }
`

TableLink.propTypes = {
  row: object.isRequired
}
