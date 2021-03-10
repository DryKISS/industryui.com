/**
 * Buttons
 */

// React
import React from 'react'

// UI
import { Buttons } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    next: true,
    nextText: 'Submit',
  },
  component: Buttons,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Molecules/Buttons',
}

export const main = (args) => <Buttons {...args} />
