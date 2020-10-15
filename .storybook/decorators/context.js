/**
 * Context selector
 */

import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, CONTEXT } from 'components'

export const ContextControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(CONTEXT).sort()
    }
  }
}
