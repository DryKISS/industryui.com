/**
 * Toggle - Stories
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { ContextControl, ControlTypes } from '../../../../.storybook/decorators'

// UI
import { Toggle } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    context: 'primary',
    disabled: false,
    size: 'md'
  },
  argTypes: {
    context: ContextControl(),
    size: {
      control: { type: ControlTypes.Select, options: ['sm', 'md', 'lg'] }
    }
  },
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = args => (
  <Toggle
    context={args.context}
    disabled={args.disabled}
    onToggle={action('toggled')}
    size={args.size}
  />
)
