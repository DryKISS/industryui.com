/**
 * Toggle - Stories
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { Context } from 'decorators'

// UI
import { Toggle } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
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
