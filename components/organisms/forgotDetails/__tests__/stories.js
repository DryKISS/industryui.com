/**
 * Forgot Details
 */

// React
import React from 'react'

// UI
import { ForgotDetails } from '../../../'
import Readme from '../README.md'

export default {
  component: ForgotDetails,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Forgot Details'
}

export const BaseComponent = (args) => {
  return <ForgotDetails {...args} />
}
