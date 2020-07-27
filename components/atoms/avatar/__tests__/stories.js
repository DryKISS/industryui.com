/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Avatar } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => (
  <Avatar content='Avatar' context={Context()} size={Size()} {...props} />
)

export const main = () => <BaseComponent />

export const withAction = () => <BaseComponent action='Edit' actionClick={action('clicked')} />

export const withImage = () => <BaseComponent src='https://via.placeholder.com/128' />

export const withGravatar = () => <BaseComponent gmail='test@gmail.com' />

export const withImageAndAction = () => (
  <BaseComponent
    action='Edit'
    actionClick={action('clicked')}
    src='https://via.placeholder.com/128'
  />
)
