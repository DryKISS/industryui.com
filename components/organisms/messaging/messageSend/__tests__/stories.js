/**
 * Messaging/MessageSend
 */

// React
import React from 'react'

// UI
import { MessageSend } from '../'

import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/MessageSend',
  component: MessageSend,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <MessageSend />
