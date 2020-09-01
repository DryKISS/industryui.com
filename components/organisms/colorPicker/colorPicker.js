/**
 * React Color
 */

// React
import React from 'react'
import { string, func } from 'prop-types'

// React Color
import { SketchPicker, CirclePicker, TwitterPicker, GithubPicker } from 'react-color'

export const ColorPicker = ({ type, onChangeComplete, ...props }) => {
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

ColorPicker.defaultProps = {
  type: 'sketch',
  width: '254px'
}

ColorPicker.propTypes = {
  type: string,
  onChangeComplete: func.isRequired,
  width: string
}
