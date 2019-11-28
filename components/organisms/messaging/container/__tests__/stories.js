/**
 * Messaging/MessageContainer
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { MessagingContainer } from '../'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

export default {
  title: 'Organisms/Messaging/Container',
  component: MessagingContainer,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <MessagingContainer messages={messages} onSearch={action('search')} onSubmit={action('submit')} />
)
