/**
 * Storybook - Decorators - Align
 */

// React
import React from 'react'

// Decorator
import ControlTypes from './controlTypes'

// UI
import arrayOfValues from '../../../components/utils/arrayOfValues/arrayOfValues'
import THEME_ALIGN from '../../../components/constants/align'

const AlignControl = () => {
  return {
    options: arrayOfValues(THEME_ALIGN).sort(),
    control: {
      type: ControlTypes.Select
    }
  }
}

export default AlignControl
