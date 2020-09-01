/**
 * React Color
 */

// React
import React from 'react'
import { string } from 'prop-types'

// React Color
import { SketchPicker, CirclePicker, TwitterPicker, GithubPicker } from 'react-color'

export const ColorPicker = ({ type, ...props }) => {
  switch (type) {
    case 'circle':
      return <CirclePicker {...props} />
    case 'sketch':
      return <SketchPicker {...props} />
    case 'github':
      return <GithubPicker {...props} />
    case 'twitter':
      return <TwitterPicker {...props} />
    default:
      return <SketchPicker {...props} />
  }
}

ColorPicker.defaultProps = {
  type: 'sketch'
}

ColorPicker.propTypes = {
  type: string
}
