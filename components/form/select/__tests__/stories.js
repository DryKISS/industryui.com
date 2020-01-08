/**
 * Select
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { FormForm, FormLabel, SelectField } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Select',
  component: SelectField,
  decorators: [Wrapper],
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
    name: 'select',
    required: true,
    register: register,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Select'>
        <SelectField {...defaultProps} required='This is required' />
      </FormLabel>
    </FormForm>
  )
}

export const main = () => (
  <BaseComponent
    options={[
      { text: 'Red', value: 'red', disabled: false },
      { text: 'Green', value: 'green', disabled: false },
      { text: 'Blue', value: 'blue', disabled: false },
      { text: 'Olive (disabled)', value: 'olive', disabled: true }
    ]}
  />
)
