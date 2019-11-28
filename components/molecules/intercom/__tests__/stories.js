/**
 * Intercom
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// Hero
import { Intercom } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Intercom',
  component: Intercom,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Intercom appID='12345' />
