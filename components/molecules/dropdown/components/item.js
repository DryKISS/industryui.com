/**
 * Dropdown - Item
 */

// React
import React from 'react'
import { func, object, node } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { elementTypes, Link } from '../../../'

const renderItem = ({ id, name, to }, closeDropdown, onClick) => {
  const item = () => (
    <StyledLink className='dropdown--link' id={id} onClick={onClick}>
      {name}
    </StyledLink>
  )

  return to ? (
    <Link border={false} passHref to={to}>
      {item()}
    </Link>
  ) : (
    item()
  )
}

export const DropdownItem = ({ closeDropdown, elementType, item, onClick }) => {
  switch (elementType) {
    case elementTypes.List:
      return (
        <StyledDropdownItem divider={item.divider}>
          {item.divider ? <StyledDivider /> : renderItem(item, closeDropdown, onClick)}
        </StyledDropdownItem>
      )

    case elementTypes.Colour:
      return (
        <StyledColourItem
          colour={item.colour}
          onClick={() => {
            onClick(item)
          }}
        />
      )
    default:
      return 'invalid elementType'
  }
}
const StyledColourItem = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  ${({ colour, theme }) =>
    css`
      background-color: ${colour};
      &&:hover {
        border: 0.15rem solid ${theme.COLOUR.white};
      }
    `}
  ${({ colour, theme }) => {
    const size = '0.5rem'
    return (
      colour === 'transparent' &&
      css`
        background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
          linear-gradient(-45deg, #808080 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #808080 75%),
          linear-gradient(-45deg, transparent 75%, #808080 75%);
        background-size: ${size} ${size};
        background-position: 0 0, 0 ${size}, ${size} -${size}, -${size} 0px;
      `
    )
  }}
`
const StyledDropdownItem = styled.div`
  line-height: 1.5;
  white-space: nowrap;
  ${({ divider }) =>
    divider &&
    css`
      padding: 0;
    `}
`

const StyledDivider = styled.div`
  border-top: 1px solid #33475b;
  height: 0;
  margin: 0.5rem;
  overflow: hidden;
`

const StyledLink = styled.span`
  color: ${({ theme }) => theme.COLOUR.primary};
  display: block;
  padding: 0.25rem 1.5rem;
  &:hover {
    background-color: #f8f9fa;
    color: inherit;
  }
`

DropdownItem.propTypes = {
  children: node,
  closeDropdown: func,
  item: object,
  onClick: func
}
