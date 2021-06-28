/**
 * Toggle - Stories
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators/context'
import { ControlTypes } from '../../../../.storybook/decorators/controlTypes'

// UI
import Toggle from '../toggle'
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
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Toggle'
}

export const main = (args) => (
  <Toggle context={args.context} disabled={args.disabled} onToggle={'toggled'} size={args.size} />
)
