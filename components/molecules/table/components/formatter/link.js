/**
 * Components - Molecules - Table - Formatter - Link
 */

// React
import React from 'react'
import { object } from 'prop-types'

// Next
import Router from 'next/router'

// Style
import styled from 'styled-components'

// UI
import StyledLink from '../../../../atoms/link/components/style'
const TableLink =
  (path, key, value, dynamicUrl) =>
  ({ row }) => {
    let useLink = false
    useLink = row[dynamicUrl] || path

    const getPath = () => {
      const url = row[dynamicUrl] || path
      return `${url}?id=${row[key]}`
    }

    const handleClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      Router.push(getPath())
    }

    const item = row[value]
    const id = row[key]

    return useLink ? (
      item !== '-' && id ? (
        <StyleLink border={false} href={getPath()} onClick={handleClick}>
          {item}
        </StyleLink>
      ) : (
        item || '-'
      )
    ) : (
      item
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

export default TableLink
