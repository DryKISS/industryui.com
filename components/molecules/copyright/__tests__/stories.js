/**
 * Components - Molecules - Copyright - Story
 */

// React
import React from 'react'

// UI
import Copyright from '../copyright'
import Readme from '../README.md'

// Data
import Data from '../__mocks__/copyright'

export default {
  args: {
    links: Data,
    marginRight: '10px'
  },
  component: Copyright,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Copyright'
}

export const main = (args) => <Copyright {...args} />
