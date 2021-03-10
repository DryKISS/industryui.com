/**
 * Rating
 */

// React
import React from 'react'

// Stroyboom
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { Rating } from '../rating'
import Readme from '../README.md'

export default {
  args: {
    value: 2,
    context: 'warning',
    withSize: false,
    size: 10,
  },
  argTypes: {
    size: { control: { type: 'range', min: 0, max: 50 } },
    value: { control: { type: 'range', min: 0, max: 5 } },
    context: ContextControl(),
  },
  title: 'Molecules/Rating',
  component: Rating,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
}

export const main = (args) => <Rating {...args} size={args.withSize === true ? args.size : 5} />
