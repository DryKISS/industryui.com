/**
 * Forgot Details
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { ForgotDetails } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details',
  component: ForgotDetails,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <ForgotDetails change={() => {}} email='' submit={() => {}} />
