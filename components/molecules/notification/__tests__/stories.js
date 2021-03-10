/**
 * Molecules - Notification
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { Notification } from '../notification'
import Readme from '../README.md'

export default {
  args: {
    content: 'Info: Everything is ok',
    context: 'primary',
    date: '2019-11-11',
    icon: 'times-circle',
    link: '/',
    title: 'Info',
  },
  argTypes: {
    context: ContextControl(),
  },
  title: 'Molecules/Notification',
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
}

const BaseComponent = (props = {}) => {
  const { args } = props

  const defaultProps = {
    close: action('closed'),
    ...args,
    ...props,
  }

  return <Notification {...defaultProps} />
}

export const main = (args) => {
  return (
    <>
      <p>Default</p>
      <BaseComponent args={args} />

      <p>Minimal</p>
      <BaseComponent args={args} context="danger" date="" icon="" title="" />
    </>
  )
}
