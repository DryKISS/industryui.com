/**
 * Copyright
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Copyright } from '../'
import Readme from '../README.md'

// Data
import { Copyright as Data } from '../__mocks__/copyright'

export default {
  title: 'Molecules/Copyright',
  component: Copyright,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Copyright brand='Company Name' links={Data} />
