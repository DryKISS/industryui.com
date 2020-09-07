/**
 * Dropdown - Menu
 */

// React
import React from 'react'
import { array, func, oneOf } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI

import { elementTypes, DropdownItem, Position } from '../../../'

export const DropdownMenu = ({ closeDropdown, elementType, items, onItemClick, position }) => {
  const handleClick = item => {
    onItemClick && onItemClick(item)
    closeDropdown()
  }
  return (
    <StyledDropdownMenu elementType={elementType} className='dropdown--menu' position={position}>
      <TooltipRectangle position={position} />
      {items.map(item => (
        <DropdownItem
          closeDropdown={closeDropdown}
          elementType={elementType}
          item={item}
          key={item.id}
          onClick={() => handleClick(item)}
        />
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
  z-index: 1;
  ${({ position }) =>
    position &&
    css`
      left: ${position === Position.Right ? 'auto' : '0'};
      right: ${position === Position.Right ? '0' : 'auto'};
      ${position === Position.Top &&
        css`
          bottom: 100%;
          top: unset;
        `}
    `}
  ${({ elementType }) => {
    return (
      elementType === elementTypes.Colour &&
      css`
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
        display: grid;
        padding: 5px;
        grid-template-columns: repeat(8, 1.5rem);
        grid-template-rows: repeat(3, 1.5rem);
      `
    )
  }}
`
const size = '0.875rem'
const dist = '0.625rem'
const TooltipRectangle = styled.div`
  border-color: transparent transparent rgb(255, 255, 255);
  border-image: initial;
  border-style: solid;
  border-width: 0.438rem;
  position: absolute;

  ${({ position }) => {
    switch (position) {
      case Position.Bottom:
        return css`
          top: -${size};
          left: ${dist};
        `
      case Position.Top:
        return css`
          bottom: -${size};
          left: ${dist};
          transform: rotateX(180deg);
        `
      case Position.Left:
        return css`
          display: none; /*remove when initial left position is resolved */
          bottom: ${size};
          right: -${size};
          transform: rotateZ(90deg);
        `
      case Position.Right:
        return css`
          display: none; /*remove when initial left position is resolved */
          bottom: ${size};
          left: -${size};
          transform: rotateZ(-90deg);
        `
      default:
        break
    }
  }}
`
DropdownMenu.propTypes = {
  closeDropdown: func,
  items: array.isRequired,
  onItemClick: func,
  position: oneOf([Position.Top, Position.Right, Position.Bottom, Position.Left])
}
