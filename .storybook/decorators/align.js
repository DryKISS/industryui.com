/**
 * Storybook - Decorators - Align
 */

// React
import React from 'react'

// Decorator
import { ControlTypes } from './'

// UI
import { arrayOfValues, THEME_ALIGN } from '../../components'

export const AlignControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_ALIGN).sort()
    }
  }
}
