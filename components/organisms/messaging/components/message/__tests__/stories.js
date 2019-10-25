/**
 * Messaging
 */

// React
import React from 'react'

// UI
import { Message } from '../'

import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/Message',
  component: Message,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const MessageIn = () =>
  <Message
    content='Test Message'
    prevType='out'
    time='12:00'
    type='in'
  />

export const MessageOut = () =>
  <Message
    content='Test Message'
    prevType='out'
    statusText='Delivered'
    time='12:00'
  />
