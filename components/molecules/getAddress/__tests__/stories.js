/**
 * Get Address
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { GetAddress } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Get Address',
  component: GetAddress,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <GetAddress apiKey='' change={() => {}} form={{ postcode: 'SW19 2EZ' }} />
