/**
 * Form - Field
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import { Button, Form, FormField, FormLabel } from '../../../'
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
  email: string().required('Please Enter a valid email').email(),
  password: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain 8 characters, with at least ine uppercase, number and special character'
    )
})

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {}

  const defaultProps = {
    errors: errors,
    register: register,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label="Email">
        <FormField {...defaultProps} name="email" />
      </FormLabel>

      <FormLabel label="Password">
        <FormField {...defaultProps} name="password" type="password" />
      </FormLabel>

      <Button content="Submit" type="submit" />
    </Form>
  )
}

export const main = (args) => <BaseComponent {...args} />
