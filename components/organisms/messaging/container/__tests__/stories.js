/**
 * Messaging/MessageContainer
 */

// React
import React from 'react'

// Storybook
import { Decorator } from 'storybook/utils/decorator'

// UI
import { MessagingContainer } from '../'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

const decorator = storyFn => <Decorator story={storyFn} />

export default {
  title: 'Organisms/Messaging/Container',
  component: MessagingContainer,
  decorators: [decorator],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <MessagingContainer messages={messages} />
