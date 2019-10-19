/**
 * Notification
 */

// React
import React from 'react'

// UI
import { Notification } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Notification',
  componnet: Notification,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Notification />

defaultStory.story = {
  name: 'Default'
}
