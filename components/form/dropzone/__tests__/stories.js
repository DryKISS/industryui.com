/**
 * React Select
 */

// React
import React from 'react'

// Storybook
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Button, Form, FormLabel, DropzoneField, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Dropzone',
  component: DropzoneField,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const { control, errors, handleSubmit } = useForm()

  const onSubmit = data => {
    console.info('data: ', data)
  }

  const defaultProps = {
    accept: 'image/*',
    control,
    disabled: boolean('Disabled', false),
    errors: errors,
    multiple: boolean('Multiple', false),
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Dropzone' />
      <DropzoneField {...defaultProps} />

      {errors.dropzone && <p>{errors.dropzone.message}</p>}

      <Button content='Submit' secondary type='submit' />
    </Form>
  )
}

export const Single = () => {
  return <BaseComponent />
}
