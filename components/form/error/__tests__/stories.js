/**
 * Form - Error
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { FormError } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Error',
  component: FormError,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    message: 'This is required',
    ...props
  }

  return <FormError {...defaultProps} />
}

export const main = () => <BaseComponent />
