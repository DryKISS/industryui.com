/**
 * Components - Form - Input Stepper
 */

// React
import React from 'react'

// React Hook Form
import { Controller } from 'react-hook-form'

// UI
import InputStepperComponent from './components/component'

// Props
import { defaultProps, propTypes } from './components/props'

const InputStepper = ({ control, defaultValue, name, ...props }) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <InputStepperComponent name={name} {...props} />
      )}
    />
  )
}

InputStepper.propTypes = propTypes
InputStepper.defaultProps = defaultProps

export default InputStepper
