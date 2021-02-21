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
import { Button, CheckboxField, Form } from '../../../'
import Readme from '../README.md'

const data = [
  {
    id: 'check',
    label: 'Yes',
    value: 'check'
  },
  {
    id: 'checked',
    label: 'No',
    value: 'checked'
  }
]

export default {
  args: {
    legend: 'Do you like Industry-UI?',
    stacked: false
  },
  title: 'Form/Checkbox',
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const schema = object().shape({
  checkbox: string().required()
})

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {}

  const defaultProps = {
    errors: errors,
    name: 'checkbox',
    register: register,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <CheckboxField {...defaultProps} data={data} />
      <Button content="Submit" type="submit" />
    </Form>
  )
}

export const main = (args) => <BaseComponent {...args} />
