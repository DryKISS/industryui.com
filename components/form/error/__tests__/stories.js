/**
 * Form - Error
 */

// React
import React from 'react'

// UI
import { FormError } from '../error'
import Readme from '../README.md'

export default {
  component: FormError,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Error'
}

export const main = (args) => {
  const defaultProps = {
    message: 'This is required',
    ...args
  }

  return <FormError {...defaultProps} />
}
