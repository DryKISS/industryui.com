/**
 * Molecules - dropdownColour
 */

// React
import React from 'react'
import { string, func } from 'prop-types'
import { Position } from 'components/theme'
import { colourList } from 'components/theme/variables/colorList'
import { Dropdown, elementTypes } from 'index'
const colours = colourList
export const ColourDropdown = ({ children, onColorSelect, position, ...props }) => {
  return (
    <Dropdown
      {...props}
      items={colours}
      onChange={e => {
        onColorSelect(e)
      }}
      position={position ?? Position.Bottom}
      elementType={elementTypes.Colour}
    >
      {children}
    </Dropdown>
  )
}

ColourDropdown.defaultProps = {
  position: Position.Bottom
}

ColourDropdown.propTypes = {
  position: string,
  onColorSelect: func.isRequired,
  width: string
}
