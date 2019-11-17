/**
 * Messaging/MessageList
 */

// React
import React from 'react'

// UI
import { MessageList } from '../'

import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

export default {
  title: 'Organisms/Messaging/MessageList',
  component: MessageList,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <MessageList messages={messages} />
