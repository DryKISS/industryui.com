/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Button, Form, FormField, FormLabel, useForm } from '../../../../'
import Readme from '../README.md'

export default {
  title: 'Form/Field',
  component: FormField,
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
    name: 'email',
    placeholder: text('Placeholder', 'Email...'),
    readOnly: boolean('Read only', false),
    required: true,
    register: register,
    ...props
  }

  const pattern =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Email'>
        <FormField {...defaultProps} regExp={pattern} />
      </FormLabel>
      <FormLabel label='Name'>
        <FormField {...defaultProps} minLength={10} defaultValue='Fred' name='fred' />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const main = () => <BaseComponent />
