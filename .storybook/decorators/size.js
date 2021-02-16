/**
 * Size selector
 */

import { ControlTypes } from './'

// UI
import { arrayOfValues } from '../../components'
import { THEME_SIZE } from '../../components/theme/constants/size'

export const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_SIZE)
    }
  }
}
