/**
 * Storybook - Decorators - Context
 */

// React
import React from 'react'

// UI
import arrayOfValues from '../../../components/utils/arrayOfValues/arrayOfValues'
import ControlTypes from './controlTypes'
import THEME_CONTEXT from '../../../components/constants/context'

const ContextControl = () => {
  return {
    options: arrayOfValues(THEME_CONTEXT).sort(),
    control: {
      type: ControlTypes.Select
    }
  }
}

export default ContextControl
