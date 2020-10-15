/**
 * Form - Field
 */

// UI
import { Button, Form, FormField, FormLabel, useForm } from 'components'
import Readme from '../README.md'

export default {
  args: {
    placeholder: 'Email...',
    readOnly: false
  },
  argTypes: {
    readOnly: { name: 'Read Only' }
  },
  title: 'Form/Field',
  component: FormField,
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
    name: 'email',
    register: register,

    ...props
  }

  const pattern =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Email'>
        <FormField {...defaultProps} regExp={pattern} />
      </FormLabel>

      <FormLabel label='Name'>
        <FormField {...defaultProps} minLength={10} defaultValue='Fred' name='fred' />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const main = args => <BaseComponent {...args} />
