/**
 * Form - Field
 */

// Storybook
import { SizeControl } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import { Button, Form, FormLabel, TextareaField, useForm, yupResolver } from 'components'
import Readme from '../README.md'

export default {
  args: {
    name: 'textarea',
    rows: 1
  },
  argTypes: {
    size: SizeControl()
  },
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Textarea'
}

const schema = object().shape({
  textarea: string().required()
})

export const main = args => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  const defaultProps = {
    errors: errors,
    register: register,
    ...args
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
