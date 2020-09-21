/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import { text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import { Button, Form, CheckboxField, useForm, yupResolver } from 'components'
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
  title: 'Form/Checkbox',
  component: CheckboxField,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
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
  const onSubmit = data => {}

  const defaultProps = {
    errors: errors,
    name: 'checkbox',
    legend: text('Legend', 'Do you like Industry-UI?'),
    register: register,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <CheckboxField {...defaultProps} data={data} />
      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const main = () => <BaseComponent />
export const stacked = () => <BaseComponent stacked />
