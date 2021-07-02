/**
 * Webcam
 */

// React
import React from 'react'

// UI
import Webcam from '../webcam'
import Readme from '../README.md'

export default {
  component: Webcam,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Webcam'
}

export const main = (args) => <Webcam {...args} />
