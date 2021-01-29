/**
 * InputStepper - Props
 */

// React
import { bool, object, number, string } from 'prop-types'

export const InputStepperPropTypes = {
  buttonProps: object,
  control: object,
  defaultValue: number,
  errors: object,
  fullWidth: bool,
  inputProps: object,
  name: string.isRequired,
  valueAlign: string
}

export const InputStepperDefaultProps = {
  buttonProps: {},
  defaultValue: 0,
  errors: {},
  fullWidth: false,
  inputProps: {},
  valueAlign: 'center'
}
