/**
 * Messaging/MessageIn
 */

// React
import React from 'react'

// UI
import { Message } from '../..'

import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/MessageIn',
  component: Message,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () =>
  <Message
    content='Test Message'
    prevType='out'
    time='12:00'
    type='in'
  />

defaultStory.story = {
  name: 'Default'
}
