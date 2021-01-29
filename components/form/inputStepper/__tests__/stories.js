/**
 * Form - InputStepper
 */

// Storybook
import { SizeControl } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import { Button, Form, FormLabel, InputStepper, useForm, yupResolver } from 'components'
import Readme from '../README.md'

export default {
  args: {
    name: 'textarea',
    rows: 1
  },
  argTypes: {
    size: SizeControl()
  },
  component: InputStepper,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/InputStepper'
}

const schema = object().shape({
  textarea: string().required()
})

export const main = args => {
  const { errors, getValues, handleSubmit, register, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  const defaultProps = {
    errors,
    getValues,
    register,
    setValue,
    ...args
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Description'>
        <InputStepper {...defaultProps} />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </Form>
  )
}
