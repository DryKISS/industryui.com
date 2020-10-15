/**
 * Align selector
 */

import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, ALIGN } from 'components'

export const AlignControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(ALIGN).sort()
    }
  }
}
