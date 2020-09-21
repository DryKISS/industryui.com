/**
 * Form - Error
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { FormError } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Error',
  component: FormError,
  decorators: [Wrapper],
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
