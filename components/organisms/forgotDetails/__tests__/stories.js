/**
 * Forgot Details
 */

// React
import React from 'react'

// UI
import { ForgotDetails } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details',
  component: ForgotDetails,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <ForgotDetails change={() => {}} email='' submit={() => {}} />
