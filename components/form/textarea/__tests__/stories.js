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
import { Button, FormForm, TextareaField, FormLabel } from '../../../../'
import Readme from '../README.md'

export default {
  title: 'Form/Textarea',
  component: TextareaField,
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
    name: 'description',
    placeholder: text('Placeholder', 'Description'),
    required: true,
    register: register,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Description'>
        <TextareaField {...defaultProps} />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </FormForm>
  )
}

export const main = () => <BaseComponent />
