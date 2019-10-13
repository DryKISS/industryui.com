/**
 * Messaging
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { MessageContainer } from '../'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

storiesOf('Organisms/Messaging', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <MessageContainer messages={messages} />
  )
