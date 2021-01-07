/**
 * Components - Molecules - Table - Formatter - Link
 */

// React
import { object } from 'prop-types'

// Next
import Router from 'next/router'

// UI
import { StyledLink } from '../../../'

// Style
import styled from 'styled-components'

export const TableLink = (path, key, value, dynamicUrl) => ({ row }) => {
  let useLink = false
  useLink = row[dynamicUrl] || path

  const getPath = () => {
    const url = row[dynamicUrl] || path
    return `${url}?id=${row[key]}`
  }

  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    Router.push(getPath())
  }

  const item = row[value]

  return useLink ? (
    item !== '-' ? (
      <StyleLink border={false} href={getPath()} onClick={handleClick}>
        {item}
      </StyleLink>
    ) : (
      '-'
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
