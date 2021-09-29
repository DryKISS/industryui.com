/**
 * Components - Form - Input Stepper
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'
import FormWrapperControl from '../../../../.storybook/decorators/wrapper/formControl'

// Yup
import { object, number } from 'yup'

// UI
import Label from '../../label/label'
import InputStepper from '../inputStepper'
import Readme from '../README.md'

const schema = object().shape({
  inputStepper: number().min(0, 'Should be greater than 0').required()
})

export default {
  argTypes: {
    buttonContext: ContextControl()
  },
  component: InputStepper,
  decorators: [FormWrapperControl],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/InputStepper'
}

export const Main = (args, { params: { control, formState, register } }) => {
  const defaultProps = {
    control,
    errors: formState.errors,
    inputProps: {
      min: 0,
      max: 10
    },
    name: 'inputStepper',
    register,
    ...args
  }

  return (
    <Label label="Quantity">
      <InputStepper {...defaultProps} />
    </Label>
  )
}
