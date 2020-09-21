/**
 * Forgot Details Reset
 */

// React
import React from 'react'

// Storybook
import { boolean, text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { ForgotDetailsReset } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details Reset',
  component: ForgotDetailsReset,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    pathLogIn: text('Login path', '/account/sign-in'),
    showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <ForgotDetailsReset {...defaultProps} />
}

export const main = () => <BaseComponent />
