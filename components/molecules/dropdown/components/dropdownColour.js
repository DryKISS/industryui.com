/**
 * Molecules - dropdownColour
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// UI
import { colourList, Position, elementTypes, Dropdown } from '../../../'

export const DropdownColour = ({ children, onColorSelect, position, ...props }) => {
  return (
    <Dropdown
      elementType={elementTypes.Colour}
      items={colourList}
      onChange={e => {
        onColorSelect(e)
      }}
      position={position ?? Position.Bottom}
      {...props}
    >
      {children}
    </Dropdown>
  )
}

DropdownColour.defaultProps = {
  position: Position.Bottom
}

DropdownColour.propTypes = {
  position: string,
  onColorSelect: func.isRequired,
  width: string
}
