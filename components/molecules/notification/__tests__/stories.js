/**
 * Notification
 */

// React
import React from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { Notification } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Notification',
  component: Notification,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Notification content='Info: Everything is ok' date='2019-11-11' />

export const withTitle = () => (
  <Notification
    close={action('closed')}
    date='2019-11-10'
    content='Everything is ok'
    title='Info'
  />
)

export const withLink = () => (
  <Notification
    close={action('closed')}
    content='Notification content'
    date='2019-11-11 12:40:10'
    link='/messages/1'
    title='Info'
  />
)

export const withPriority = () => (
  <Notification
    close={action('closed')}
    date='2019-11-11 13:50:30'
    content='Attention needed'
    link='/messages/2'
    priority={1}
    title='Urgent'
  />
)
