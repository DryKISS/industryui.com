/**
 * Components - Atoms - Date - Story
 */

// React
import React from 'react'

// Storybook
import { SizeControl } from '../../../../.storybook/decorators'

// UI
import { Date } from '../date'
import Readme from '../README.md'

export default {
  args: {
    date: '24 Feb 2020 08:36',
    size: 'md',
  },
  argTypes: {
    size: SizeControl(),
  },
  component: Date,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Atoms/Date',
}

export const main = (args) => <Date {...args} />
