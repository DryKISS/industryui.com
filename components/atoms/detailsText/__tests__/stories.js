/**
 * Components - Details - Stories
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { DetailsText } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/DetailsText',
  component: DetailsText,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <DetailsText content='Caption' text='value for this property' />
