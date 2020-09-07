/**
 * Organisms - Icon picker
 */

// React
// import React from 'react'
import { array, string, func } from 'prop-types'

import { Position } from 'components/theme'
import { Dropdown } from 'components'
import { elementTypes } from 'index'

export const IconPicker = ({ iconOptions, handleSelectIcon, position, children, ...props }) => {
  return (
    <>
      <Dropdown
        {...props}
        items={iconOptions}
        onChange={handleSelectIcon}
        position={position ?? Position.Bottom}
        elementType={elementTypes.Icon}
      >
        {children}
      </Dropdown>
    </>
  )
}

IconPicker.defaultProps = {}

IconPicker.propTypes = {
  position: string,
  handleSelectIcon: func.isRequired,
  width: string
}

IconPicker.defaultProps = {
  position: Position.Bottom
}

IconPicker.propTypes = {
  iconOptions: array.isRequired
}
