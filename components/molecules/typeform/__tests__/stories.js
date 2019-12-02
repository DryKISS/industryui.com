/**
 * Typeform
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Typeform } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Typeform',
  component: Typeform,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Typeform tags={[]} />
