/**
 * InputStepper - Props
 */

// React
import { bool, func, object, number, string } from 'prop-types'

export const InputStepperPropTypes = {
  defaultValue: number,
  errors: object.isRequired,
  fullWidth: bool,
  register: func.isRequired,
  name: string.isRequired,
  setValue: func.isRequired,
  valueAlign: string
}

export const InputStepperDefaultProps = {
  defaultValue: 0,
  fullWidth: false,
  valueAlign: 'center'
}
