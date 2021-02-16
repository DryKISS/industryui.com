/**
 * Storybook - Decorators - Align
 */

// Decorator
import { ControlTypes } from './'

// UI
import { arrayOfValues, THEME_ALIGN } from '../../components'

export const AlignControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(ALIGN).sort()
    }
  }
}
