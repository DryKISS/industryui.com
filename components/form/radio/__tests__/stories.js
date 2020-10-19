/**
 * Form - Radio
 */

// UI
import { Button, Form, RadioField, useForm } from 'components'
import Readme from '../README.md'

// Data
import { RADIO_GENDER } from '../__mocks__/radio'

export default {
  args: {
    legend: 'Gender?',
    stacked: false
  },
  title: 'Form/Radio',
  component: RadioField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm()
  const onSubmit = data => {}

  const defaultProps = {
    errors: errors,
    name: 'radio',
    register: register,

    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <RadioField {...defaultProps} data={RADIO_GENDER()} />
      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const main = args => <BaseComponent {...args} />
