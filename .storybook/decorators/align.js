/**
 * Align selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'
import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, ALIGN } from 'components'

export const Align = id => select('Align', ALIGN, 'start', id)

export const AlignControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(ALIGN).sort()
    }
  }
}
