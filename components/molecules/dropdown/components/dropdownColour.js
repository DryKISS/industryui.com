/**
 * Molecules - dropdownColour
 */

// React
import React from 'react'
import { func, string } from 'prop-types'
import { elementTypes, Dropdown } from 'index'

// UI
import { colourList, Position } from '../../../'

const colours = colourList

export const DropdownColour = ({ children, onColorSelect, position, ...props }) => {
  return (
    <Dropdown
      elementType={elementTypes.Colour}
      items={colours}
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
