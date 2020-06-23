/**
 * Login
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Login } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Login',
  component: Login,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    blockSubmitButton: true,
    forgotPassword: true,
    heading: 'Log In',
    pathForgot: '/account/forgot-details',
    pathSignUp: '/account/sign-in',
    remember: '',
    showLabel: true,
    showPassword: true,
    showPlaceholder: true,
    submitLoading: true,
    ...props
  }

  return <Login {...defaultProps} />
}

export const main = () => {
  return <BaseComponent />
}

export const withShowAndHidePassword = () => {
  return <Login showPassword />
}

export const withBlockSubmitButton = () => {
  return <Login blockSubmitButton />
}

export const withPlaceholder = () => <Login showLabel={false} showPlaceholder />
