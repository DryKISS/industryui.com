/**
 * React Select
 */

// Storybook
import { boolean } from '@storybook/addon-knobs'

// UI
import { Button, Form, FormError, FormLabel, DropzoneField, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Dropzone',
  component: DropzoneField,
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

      {errors.dropzone && <FormError message={errors.dropzone.message} />}

      <Button content='Submit' secondary type='submit' />
    </Form>
  )
}

export const Single = () => {
  return <BaseComponent />
}
