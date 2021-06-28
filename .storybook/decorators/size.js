/**
 * Size selector
 */

// React
import React from 'react'

// UI
import { arrayOfValues } from '../../components/utils/arrayOfValues/index'
import { ControlTypes } from './'
import THEME_SIZE  from '../../components/constants/size'

export const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_SIZE)
    }
  }
}
