/**
 * Size selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'
import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, SIZE } from 'components'

export const Size = (id, defaultValue = 'lg') => select('Size', SIZE, defaultValue, id)

export const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(SIZE)
    }
  }
}
