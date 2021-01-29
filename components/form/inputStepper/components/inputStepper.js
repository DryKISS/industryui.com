/**
 * InputStepper
 */

// RHF
import { Controller } from 'react-hook-form'

// UI
import { InputStepperComponent } from './component'

// Props
import { InputStepperDefaultProps, InputStepperPropTypes } from './props'

export const InputStepper = ({ control, defaultValue, name, ...props }) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      as={<InputStepperComponent name={name} {...props} />}
    />
  )
}

InputStepper.propTypes = InputStepperPropTypes

InputStepper.defaultProps = InputStepperDefaultProps
