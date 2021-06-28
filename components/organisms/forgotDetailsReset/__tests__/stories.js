/**
 * Forgot Details Reset
 */

// React
import React from 'react'

// UI
import  ForgotDetailsReset  from '../forgotDetailsReset'
import Readme from '../README.md'

export default {
  component: ForgotDetailsReset,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Forgot Details Reset'
}

export const BaseComponent = (args) => {
  return <ForgotDetailsReset {...args} />
}
