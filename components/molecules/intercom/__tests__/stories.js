/**
 * Intercom
 */

// React
import React from 'react'

// Hero
import { Intercom } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Intercom',
  component: Intercom,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Intercom appID='12345' />

defaultStory.story = {
  name: 'Default'
}
