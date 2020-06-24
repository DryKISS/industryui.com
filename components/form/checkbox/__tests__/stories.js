/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Button, Form, CheckboxField } from 'components'
import Readme from '../README.md'

const data = [
  {
    id: 'check',
    label: 'Yes',
    required: true,
    value: 'check'
  },
  {
    id: 'checked',
    label: 'No',
    required: true,
    value: 'checked'
  }
]

export default {
  title: 'Form/Checkbox',
  component: CheckboxField,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const { errors, handleSubmit, register } = useForm()
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
