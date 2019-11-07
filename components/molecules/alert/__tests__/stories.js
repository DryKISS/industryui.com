/**
 * Alert
 */

// React
import React from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { Alert } from '../'
import Readme from '../README.md'

const CenterDecorator = storyFn => (
  <div
    style={{
      padding: '1rem'
    }}
  >
    {storyFn()}
  </div>
)

export default {
  title: 'Molecules/Alert',
  component: Alert,
  decorators: [CenterDecorator],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Alert content='Alert' />

export const withClose = () => (
  <Alert content='Alert with close button' context='info' close={action('closed')} />
)

export const withIcon = () => (
  <Alert
    content='Alert'
    context='danger'
    close={action('closed')}
    icon='exclamation-triangle'
    iconPrefix='fad'
  />
)

export const withHeader = () => (
  <Alert content='Alert' context='info' close={action('closed')} header='Title' />
)

export const withHeaderIcon = () => (
  <Alert
    content='There was an error processing your request'
    context='warning'
    close={action('closed')}
    header='Error'
    icon='exclamation-triangle'
    iconPrefix='fad'
  />
)
