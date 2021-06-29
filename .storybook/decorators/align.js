/**
 * Storybook - Decorators - Align
 */

// React
import React from 'react'

// Decorator
import { ControlTypes } from './controlTypes'

// UI
import arrayOfValues from '../../components/utils/arrayOfValues/index'
import THEME_ALIGN from '../../components/constants/align'

export const AlignControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_ALIGN).sort()
    }
  }
}
