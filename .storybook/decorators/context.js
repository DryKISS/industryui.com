/**
 * Storybook - Decorators - Context
 */

// React
import React from 'react'

// UI
import arrayOfValues from '../../components/utils/arrayOfValues/arrayOfValues'
import ControlTypes from './controlTypes'
import THEME_CONTEXT from '../../components/constants/context'

const ContextControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_CONTEXT).sort()
    }
  }
}

export default ContextControl
