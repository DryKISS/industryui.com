/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Avatar } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}
const defaultProps = {
  content: 'Avatar',
  context: Context(),
  size: Size()
}

const BaseComponent = props => <Avatar {...defaultProps} {...props} />

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
