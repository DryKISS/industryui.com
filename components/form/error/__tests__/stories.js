/**
 * Form - Error
 */

// UI
import { FormError } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Error',
  component: FormError,
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
