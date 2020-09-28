/**
 * Alert
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { Alert } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Alert',
  component: Alert,
  decorators: [Wrapper],
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
