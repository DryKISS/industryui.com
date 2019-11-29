/**
 * Messaging/MessageList
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { MessageList } from '../'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

export default {
  title: 'Organisms/Messaging/MessageList',
  component: MessageList,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <MessageList messages={messages} />
