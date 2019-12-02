/**
 * Messaging/Send
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { MessagingSend, useChange } from 'root'
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
  const INITIAL_STATE = { message: '' }

  const [change, form, setForm] = useChange(INITIAL_STATE)
  const { message } = form

  return (
    <MessagingSend
      handleChange={change}
      handleSelect={msg => setForm({ message: message + msg })}
      onSubmit={action('Submit')}
      maxLength={320}
      message={message}
    />
  )
}

export const main = () => <Send />
