/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { number, withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

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
  <Avatar content='Avatar' context={Context()} size={number('Size', 60)} {...props} />
)

export const main = () => <BaseComponent />

export const withAction = () => (
  <BaseComponent action='Edit' actionClick={() => window.alert('Clicked')} />
)

export const withImage = () => (
  <BaseComponent src='https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg' />
)

export const withGravatar = () => <BaseComponent gmail='test@gmail.com' />

export const withImageAndAction = () => (
  <BaseComponent
    action='Edit'
    actionClick={() => window.alert('Clicked')}
    src='https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg'
  />
)
