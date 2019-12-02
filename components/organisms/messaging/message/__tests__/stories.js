/**
 * Messaging/Message
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Message } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/Message',
  component: Message,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Message content='Test Message' prevType='out' time='12:00' type='in' />
