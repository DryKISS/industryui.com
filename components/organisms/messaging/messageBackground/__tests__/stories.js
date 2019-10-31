/**
 * Messaging/MessageBackground
 */

// React
import React from 'react'

// Storybook
import { select, withKnobs } from '@storybook/addon-knobs'

// UI
import { MessageBackground } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Messaging/Background',
  component: MessageBackground,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const options = {
  Blank: '',
  DryKISS: '/messaging/background.png',
  WhatsApp: '/messaging/whatsapp.png'
}
const defaultValue = '/messaging/background.png'

export const main = () => (
  <div style={{ height: '500px' }}>
    <MessageBackground />
  </div>
)

export const path = () => (
  <div style={{ height: '500px' }}>
    <MessageBackground path={select('Background', options, defaultValue)} />
  </div>
)
