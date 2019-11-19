/**
 * Dropdown
 */

import React from 'react'

import { array, func, string } from 'prop-types'

import styled from 'styled-components'

import { DropdownItem } from '../../'

export const DropdownMenu = ({ closeDropdown, items, onItemClick, position }) => {
  const handleClick = item => {
    onItemClick(item)
    closeDropdown()
  }
  return (
    <StyledDropdownMenu className='dropdown--menu' position={position}>
      {items.map(item => (
        <DropdownItem key={item.id} closeDropdown={closeDropdown} item={item} onClick={() => handleClick(item)} />
      ))}
    </StyledDropdownMenu>
  )
}

const StyledDropdownMenu = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  left: 0;
  margin-top: 1px;
  min-width: 8rem;
  padding: 0.5rem 0;
  position: absolute;
  top: 100%;
  ${({ position }) =>
    position &&
    `
    left: ${position === 'right' ? 'auto' : '0'};
    right: ${position === 'right' ? '0' : 'auto'};
    ${position === 'top' && `
      bottom: 100%;
      top: unset;
    `}
  `}
`

DropdownMenu.propTypes = {
  closeDropdown: func,
  items: array.isRequired,
  onItemClick: func,
  position: string
}
