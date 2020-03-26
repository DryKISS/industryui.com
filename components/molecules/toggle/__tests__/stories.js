/**
 * Toggle - Stories
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Toggle } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Toggle',
  component: Toggle,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Toggle
    context={Context()}
    disabled={boolean('Disabled', false)}
    onToggle={action('toggled')}
    size={select('Size', ['sm', 'md', 'lg'], 'md')}
  />
)
