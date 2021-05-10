/**
 * Shimmer
 */

// React
import React from 'react'

// UI
import Shimmer from '../shimmer'
import Readme from '../README.md'

export default {
  args: {
    duration: 700,
    height: '50px',
    hexColour: '#f6f7f8',
    width: '200px'
  },
  component: Shimmer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Shimmer'
}

export const main = (args) => <Shimmer {...args} />
