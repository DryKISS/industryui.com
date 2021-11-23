/**
 * Molecules - OffCanvas - Tests - Form
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Form from '../../../form/form/form'
import Input from '../../../form/input/input'
import Label from '../../../form/label/label'

const OffCanvasForm = ({ onSubmit }) => {
  const schema = object().shape({
    name: string().required(),
    surname: string().required(),
    color: string().required(),
    brand: string().required(),
    preferences: string().required(),
    suggestions: string().required(),
    email: string().required('Please Enter an email').email(),
    password: string().required()
  })

  const {
    formState: { errors = {} },
    handleSubmit,
    register
  } = useForm({
    resolver: yupResolver(schema)
  })

  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <Form id="offCanvasForm" handleSubmit={handleSubmit(onSubmit)}>
      <Label label="Name">
        <Input {...defaultOptions} name="name" placeholder="Alfred" />
      </Label>

      <Label label="Surname">
        <Input {...defaultOptions} name="surname" placeholder="Lavanne" />
      </Label>

      <Label label="Favourite colour">
        <Input {...defaultOptions} name="color" placeholder="Red" />
      </Label>

      <Label label="Brand">
        <Input {...defaultOptions} name="brand" placeholder="Apple" />
      </Label>

      <Label label="Preferences">
        <Input {...defaultOptions} name="preferences" placeholder="Two" />
      </Label>

      <Label label="Suggestions">
        <Input {...defaultOptions} name="suggestions" placeholder="One" />
      </Label>

      <Label label="Email">
        <Input {...defaultOptions} name="email" placeholder="Enter email address" type="email" />
      </Label>

      <Label label="Password">
        <Input
          {...defaultOptions}
          name="password"
          placeholder="Enter your password"
          type="password"
        />
      </Label>
    </Form>
  )
}

export default OffCanvasForm
