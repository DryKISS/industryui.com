/**
 * Components - Form - Input Stepper
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/context'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, number } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Button from '../../../atoms/button/button/button'
import Form from '../../form/form'
import FormLabel from '../../label/label'
import InputStepper from '../inputStepper'
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
  inputStepper: number().min(0, 'Should be greater than 0').required()
})

export const Main = (args) => {
  const { control, errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
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
    register,
    ...args
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label="Quantity">
        <InputStepper {...defaultProps} />
      </FormLabel>

      <Button content="Submit" type="submit" />
    </Form>
  )
}
