/**
 * Typeform
 */

// React
import React from 'react'

// UI
import { Typeform } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Typeform',
  component: Typeform,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Typeform tags={[]} />

defaultStory.story = {
  name: 'Default'
}
