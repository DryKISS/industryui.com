/**
 * Components - Details - Stories
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Details } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Details',
  component: Details,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Details summary='Summary'>Content</Details>
