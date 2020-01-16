/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { Button, FormForm, CheckboxField } from '../../../../'
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
    required: true,
    register: register,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <CheckboxField {...defaultProps} data={data} required='This is required' />
      <Button content='Submit' type='submit' />
    </FormForm>
  )
}

export const main = () => <BaseComponent />
export const stacked = () => <BaseComponent stacked />
