/**
 * Get Address
 */

// React
import React from 'react'

// UI
import { GetAddress } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Get Address',
  component: GetAddress,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <GetAddress apiKey='' change={() => {}} form={{ postcode: 'SW19 2EZ' }} />
)

defaultStory.story = {
  name: 'Default'
}
