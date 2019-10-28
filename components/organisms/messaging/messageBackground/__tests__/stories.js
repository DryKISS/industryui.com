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

export const defaultStory = () => <MessageBackground />

defaultStory.story = {
  name: 'Default'
}
