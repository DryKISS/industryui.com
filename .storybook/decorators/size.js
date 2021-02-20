/**
 * Size selector
 */

// React
import React from 'react'

// UI
import { arrayOfValues } from '../../components'
import { ControlTypes } from './'
import { THEME_SIZE } from '../../components/theme/constants/size'

export const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_SIZE)
    }
  }
}
