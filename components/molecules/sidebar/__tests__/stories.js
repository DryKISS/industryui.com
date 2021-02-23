/**
 * Sidebar
 */

// React
import React from 'react'

// UI
import { Sidebar } from '../../../'
import Readme from '../README.md'

// Data
import { Sidebar as Data } from '../__mocks__/links'

export default {
  args: {
    data: Data
  },

  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Sidebar'
}

export const main = (args) => <Sidebar {...args} />
