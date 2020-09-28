/**
 * Molecules - Notification
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { Context } from 'decorators'

// UI
import { Notification } from 'components'
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

const BaseComponent = (props = {}) => {
  const defaultProps = {
    close: action('closed'),
    content: text('Content', 'Info: Everything is ok'),
    context: Context(),
    date: text('Date', '2019-11-11'),
    icon: text('Icon', 'times-circle'),
    link: text('Link', '/'),
    title: text('Title', 'Info'),
    ...props
  }

  return <Notification {...defaultProps} />
}

export const main = () => {
  return (
    <>
      <p>Default</p>
      <BaseComponent />

      <p>Minimal</p>
      <BaseComponent context='danger' date='' icon='' title='' />
    </>
  )
}
