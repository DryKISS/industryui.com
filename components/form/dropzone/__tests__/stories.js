/**
 * React Select
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import Button from '../../../atoms/button/button/button'
import DropzoneField from '../dropzoneField'
import Form from '../../form/form'
import FormError from '../../error/error'
import FormLabel from '../../label/label'
import Readme from '../README.md'

export default {
  args: {
    disabled: false,
    multiple: false
  },
  component: DropzoneField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Dropzone'
}

const BaseComponent = (props = {}) => {
  const { control, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.info('data: ', data)
  }

  const defaultProps = {
    accept: 'image/*',
    control,
    errors: errors,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label="Dropzone" />
      <DropzoneField {...defaultProps} />

      {errors.dropzone && <FormError message={errors.dropzone.message} />}

      <Button content="Submit" secondary type="submit" />
    </Form>
  )
}

export const Single = (args) => {
  return <BaseComponent {...args} />
}
