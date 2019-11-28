/**
 * Rating
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Rating } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Rating',
  component: Rating,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Rating item={5} />
