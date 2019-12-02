/**
 * Forgot Details Reset
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { ForgotDetailsReset } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details Reset',
  component: ForgotDetailsReset,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <ForgotDetailsReset change={() => {}} email='' submit={() => {}} />
