/**
 *  Components - Molecules - Alert - Story
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { Alert } from '../components/alert'
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

export const main = (args) => <Alert {...args} />
