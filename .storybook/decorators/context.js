/**
 * Storybook - Decorators - Context
 */

import { ControlTypes } from './'

// UI
import { arrayOfValues } from '../../components'
import { THEME_CONTEXT } from '../../components/theme/constants/context'

export const ContextControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_CONTEXT).sort()
    }
  }
}
