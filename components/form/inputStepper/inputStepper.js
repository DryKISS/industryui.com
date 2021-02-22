/**
 * Components - Form - Input Stepper
 */

// React
import React from 'react'

// RHF
import { Controller } from 'react-hook-form'

// UI
import { InputStepperComponent } from './component'

// Props
import { defaultProps, propTypes } from './props'

export const InputStepper = ({ control, defaultValue, name, ...props }) => {
  return (
    <Controller
      as={<InputStepperComponent name={name} {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
    />
  )
}

InputStepper.propTypes = propTypes
InputStepper.defaultProps = defaultProps
