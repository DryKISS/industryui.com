/**
 * SimpleTime
 */

// React
import React from 'react'

// UI
import { SimpleTime } from '../../../'
import Readme from '../README.md'

export default {
  component: SimpleTime,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/SimpleTime'
}

export const main = (args) => <SimpleTime {...args} />
