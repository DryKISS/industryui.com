/**
 * Password Change
 */

// React
import React from 'react'

// Storybook
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { PasswordChange } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Password Change',
  component: PasswordChange,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <PasswordChange {...defaultProps} />
}

export const main = () => <BaseComponent />
