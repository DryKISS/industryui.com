/**
 * Password Change
 */

// React
import React from 'react'

// Storybook
import { boolean } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { PasswordChange } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Password Change',
  component: PasswordChange,
  decorators: [Wrapper],
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
