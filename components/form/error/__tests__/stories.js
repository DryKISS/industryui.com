/**
 * Form - Error
 */

// UI
import { FormError } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form',
  component: FormError,
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
    message: 'This is required',
    ...props
  }

  return <FormError {...defaultProps} />
}

export const error = () => <BaseComponent />
