/**
 * Messaging
 */

// React
import React from 'react'

// UI
import {
  MessageBackground,
  MessageContainer,
  MessageSend
} from '../components'

import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

export default {
  title: 'Organisms/Messaging',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const Main = () =>
  <MessageContainer messages={messages} />

export const Send = () =>
  <MessageSend />

export const Background = () =>
  <MessageBackground />
