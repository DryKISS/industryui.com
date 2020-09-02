/**
 * Organisms - Icon picker
 */

// React
// import React from 'react'
import { array } from 'prop-types'

export const IconPicker = ({ iconOptions, ...props }) => {
  return <p>Icon picker</p>
}

IconPicker.defaultProps = {}

IconPicker.propTypes = {
  iconOptions: array.isRequired
}
