/**
 * Messaging/MessageBackground
 */

// React
import React from 'react'

// UI
import { MessageBackground } from '../'

import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/Background',
  component: MessageBackground,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <div style={{ height: '500px' }}>
    <MessageBackground />
  </div>
)

export const path = () => (
  <div style={{ height: '500px' }}>
    <MessageBackground path='/messaging/background.png' />
  </div>
)
