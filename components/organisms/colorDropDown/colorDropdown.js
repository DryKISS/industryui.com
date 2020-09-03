/**
 * Organisms - Color picker
 */

// React
import React from 'react'
import { string, func } from 'prop-types'
import { Position } from 'components/theme'
import { colourList } from 'components/theme/variables/colorList'
import { Dropdown, elementTypes } from 'index'
const colours = colourList
export const ColorDropdown = ({ position, onColorSelect, children, ...props }) => {
  return (
    <>
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
    </>
  )
}

ColorDropdown.defaultProps = {
  position: Position.Bottom
}

ColorDropdown.propTypes = {
  position: string,
  onColorSelect: func.isRequired,
  width: string
}
