/**
 * Form - Field
 */

// Yup
import { object, string } from 'yup'

// UI
import { Button, Form, FormField, FormLabel, useForm, yupResolver } from 'components'
import Readme from '../README.md'

export default {
  args: {
    placeholder: 'Email...',
    readOnly: false
  },
  argTypes: {
    readOnly: {
      name: 'Read Only'
    }
  },
  component: FormField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Field'
}

const schema = object().shape({
  email: string()
    .required('Please Enter a valid email')
    .email(),
  password: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
})

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {}

  const defaultProps = {
    errors: errors,
    register: register,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Email'>
        <FormField {...defaultProps} name='email' />
      </FormLabel>

      <FormLabel label='Password'>
        <FormField {...defaultProps} name='password' type='password' />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const main = args => <BaseComponent {...args} />
