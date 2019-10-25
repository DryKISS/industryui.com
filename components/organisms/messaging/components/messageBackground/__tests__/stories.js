/**
 * Messaging
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

export const Main = () =>
  <div style={{ height: '500px', width: '500px' }}>
    <MessageBackground background='messaging/background.png' />
  </div>
