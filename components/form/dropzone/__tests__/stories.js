/**
 * React Select
 */

// UI
import { Button, DropzoneField, Form, FormError, FormLabel, useForm } from 'components'
import Readme from '../README.md'

export default {
  args: { disabled: false, multiple: false },
  title: 'Form/Dropzone',
  component: DropzoneField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
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
    errors: errors,
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

export const Single = args => {
  return <BaseComponent {...args} />
}
