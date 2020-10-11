/**
 * Context selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'
import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, CONTEXT } from 'components'

export const Context = (id, context = 'primary', label = 'Context') =>
  select(label, CONTEXT, context, id)

export const ContextControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(CONTEXT).sort()
    }
  }
}
