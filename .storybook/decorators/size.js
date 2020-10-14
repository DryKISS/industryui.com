/**
 * Size selector
 */

import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, SIZE } from 'components'

export const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(SIZE)
    }
  }
}
