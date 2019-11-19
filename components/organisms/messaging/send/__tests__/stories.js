/**
 * Messaging/Send
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Decorator } from 'storybook/utils/decorator'

// UI
import { MessagingSend, useChange } from 'root'
import Readme from '../README.md'

const decorator = storyFn => <Decorator story={storyFn} />

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

export default {
  title: 'Organisms/Messaging/Send',
  component: MessagingSend,
  decorators: [decorator],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Send />
