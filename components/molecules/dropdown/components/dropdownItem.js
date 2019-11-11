/**
 * Dropdown
 */

import React from 'react'

import { func, object, node } from 'prop-types'

import styled from 'styled-components'

// UI
import { Link } from '../../../'

const renderLink = ({ id, name, onClick, to }, closeDropdown) => {
  const handleClick = () => {
    closeDropdown()
    onClick && onClick()
  }

  return (
    <Link to={to} passHref>
      <StyledLink className='dropdown--link' id={id} onClick={handleClick}>
        {name}
      </StyledLink>
    </Link>
  )
}

export const DropdownItem = ({ closeDropdown, item }) => {
  return (
    <StyledDropdownItem divider={item.divider}>
      {item.divider ? <StyledDivider /> : renderLink(item, closeDropdown)}
    </StyledDropdownItem>
  )
}

const StyledDropdownItem = styled.div`
  line-height: 1.5;
  white-space: nowrap;
  ${({ divider }) => divider && 'padding: 0;'}
`

const StyledDivider = styled.div`
  border-top: 1px solid #33475b;
  height: 0;
  margin: 1rem;
  overflow: hidden;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.NAVBAR.colourActive};
  display: block;
  padding: 0.25rem 1.5rem;
  text-decoration: none;

  &:hover {
    background-color: #f8f9fa;
    color: inherit;
  }
`

DropdownItem.propTypes = {
  children: node,
  closeDropdown: func,
  item: object
}
