/**
 * Messaging/Send
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { MessagingSend } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/Send',
  component: MessagingSend,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const Send = () => {
  return <MessagingSend onSubmit={action('Submit')} maxLength={320} />
}

export const main = () => <Send />
