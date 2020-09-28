/**
 * Form - Field
 */

// Storybook
import { text } from '@storybook/addon-knobs'

// UI
import { Button, Form, TextareaField, FormLabel, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Textarea',
  component: TextareaField,
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
