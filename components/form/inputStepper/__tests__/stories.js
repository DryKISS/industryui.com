/**
 * Form - InputStepper
 */

// Storybook
import { ContextControl } from '../../../../.storybook/decorators/context'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, number } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import { Button, Form, FormLabel, InputStepper } from '../../../'
import Readme from '../README.md'

export default {
  argTypes: {
    buttonContext: ContextControl()
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
  inputStepper: number()
    .min(0, 'Should be greater than 0')
    .required()
})

export const main = args => {
  const { control, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  const defaultProps = {
    control,
    errors,
    inputProps: {
      min: 0,
      max: 10
    },
    name: 'inputStepper',
    ...args
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Quantity'>
        <InputStepper {...defaultProps} />
      </FormLabel>

      <Button content='Submit' type='submit' />
    </Form>
  )
}
