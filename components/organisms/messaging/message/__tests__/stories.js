/**
 * Messaging/Message
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Message } from 'components'
import Readme from '../README.md'

// Data
import { message } from '../__mocks__/message'

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

export const main = () => <Message message={message} prevType='out' time='12:00' type='in' />
