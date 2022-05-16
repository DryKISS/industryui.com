/**
 * CLose
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'
import { IconPrefixControl } from '../../../../.storybook/decorators/fontawesome'

// UI
import Close from '../close'
import Readme from '../README.md'

export default {
  args: {
    className: '',
    click: () => {},
    context: 'dark',
    icon: 'times-circle',
    prefix: 'fas'
  },
  argTypes: {
    context: ContextControl(),
    prefix: IconPrefixControl()
  },
  component: Close,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Close'
}

export const main = (args) => {
  return <Close {...args} />
}
