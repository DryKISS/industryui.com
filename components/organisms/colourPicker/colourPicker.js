/**
 * Organisms - Colour picker
 */

// React
import React from 'react'
import { string, func } from 'prop-types'

// React Color
import { SketchPicker, CirclePicker, TwitterPicker, GithubPicker } from 'react-color'

const ColourPicker = ({ type, onChangeComplete, ...props }) => {
  switch (type) {
    case 'circle':
      return <CirclePicker onChangeComplete={onChangeComplete} {...props} />
    case 'sketch':
      return <SketchPicker onChangeComplete={onChangeComplete} {...props} />
    case 'github':
      return <GithubPicker onChangeComplete={onChangeComplete} {...props} />
    case 'twitter':
      return <TwitterPicker onChangeComplete={onChangeComplete} {...props} />
    default:
      return <SketchPicker onChangeComplete={onChangeComplete} {...props} />
  }
}

ColourPicker.defaultProps = {
  type: 'github',
  width: '214px'
}

ColourPicker.propTypes = {
  type: string,
  onChangeComplete: func.isRequired,
  width: string
}

export default ColourPicker
