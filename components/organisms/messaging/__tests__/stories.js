/**
 * Messaging
 */

// React
import React from 'react'

// UI
import { MessageContainer } from '../'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

export default {
  title: 'Organisms/Messaging',
  component: MessageContainer,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <MessageContainer messages={messages} />

defaultStory.story = {
  name: 'Default'
}
