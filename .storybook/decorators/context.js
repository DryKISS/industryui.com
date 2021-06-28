/**
 * Storybook - Decorators - Context
 */

// React
import React from 'react'

// UI
import { arrayOfValues } from '../../components/utils/arrayOfValues/index'
import { ControlTypes } from './'
import THEME_CONTEXT from '../../components/constants/context'

export const ContextControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_CONTEXT).sort()
    }
  }
}
