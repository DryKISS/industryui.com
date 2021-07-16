/**
 * Form - Label
 */

// React
import React from 'react'

// UI
import FormLabel from '../label'
import Readme from '../README.md'

export default {
  component: FormLabel,
  title: 'Form/Label',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    children: '',
    id: '',
    label: 'Label',
    ...props
  }

  return <FormLabel {...defaultProps} />
}

export const main = () => <BaseComponent />
