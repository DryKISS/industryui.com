/**
 * Alert
 */

// Storybook
// import { action } from '@storybook/addon-actions'

// Storybook
import { ContextControl } from 'decorators'

// UI
import { Alert } from 'components'
import Readme from '../README.md'

export default {
  args: {
    content: 'Content',
    header: 'Header',
    icon: 'bars',
    iconPrefix: 'fas'
  },
  argTypes: {
    context: ContextControl(),
    close: {
      action: 'clicked'
    }
  },
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Alert'
}

export const main = args => <Alert {...args} />
