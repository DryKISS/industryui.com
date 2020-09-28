/**
 * Form - Label
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { FormLabel } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Label',
  component: FormLabel,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
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
