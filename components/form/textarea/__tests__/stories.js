/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Button, Form, TextareaField, FormLabel, useForm } from '../../../../'
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
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Description'>
        <TextareaField {...defaultProps} />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const main = () => <BaseComponent />
