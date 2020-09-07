/**
 * Dropdown - Menu
 */

// React
import React from 'react'
import { array, func, oneOf } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { DropdownItem } from '../../'
import { Position } from 'components/theme'
import { elementTypes } from 'index'

export const DropdownMenu = ({ closeDropdown, items, onItemClick, position, elementType }) => {
  const handleClick = item => {
    onItemClick && onItemClick(item)
    closeDropdown()
  }
  return (
    <StyledDropdownMenu elementType={elementType} className='dropdown--menu' position={position}>
      <TooltipRectangle position={position} />
      {items.map(item => (
        <DropdownItem
          key={item.id}
          closeDropdown={closeDropdown}
          item={item}
          onClick={() => handleClick(item)}
          elementType={elementType}
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
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
        border-radius: 4px;
        padding: 5px;
        display: grid;
        grid-template-columns: repeat(8, 25px);
        grid-template-rows: repeat(3, 25px);
      `
    )
  }}
  ${({ elementType }) => {
    return (
      elementType === elementTypes.Icon &&
      css`
        width: 17rem;
        flex-wrap: wrap;
        padding: 0.2rem;
        display: flex;
        flex-direction: row;
      `
    )
  }}
`
const TooltipRectangle = styled.div`
  position: absolute;
  border-width: 7px;
  border-style: solid;
  border-color: transparent transparent rgb(255, 255, 255);
  border-image: initial;
  ${({ position }) => {
    switch (position) {
      case Position.Bottom:
        return css`
          top: -14px;
          left: 10px;
        `
      case Position.Top:
        return css`
          bottom: -14px;
          left: 10px;
          transform: rotateX(180deg);
        `
      case Position.Left:
        return css`
          display: none; /*remove when initial left position is resolved */
          bottom: 14px;
          right: -14px;
          transform: rotateZ(90deg);
        `
      case Position.Right:
        return css`
          display: none; /*remove when initial left position is resolved */
          bottom: 14px;
          left: -14px;
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
