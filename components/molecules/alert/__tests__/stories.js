/**
 * Alert
 */

// React
import React from 'react'

// UI
import { Alert } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Alert content='Alert' context='secondary' />

defaultStory.story = {
  name: 'Default'
}
