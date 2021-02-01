/**
 * InputStepper - Props
 */

// React
import { bool, func, object, oneOf, oneOfType, number, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

export const InputStepperPropTypes = {
  buttonContext: oneOf(Object.values(CONTEXT)),
  buttonProps: object,
  control: object,
  defaultValue: oneOfType([number, string]),
  errors: object,
  fullWidth: bool,
  inputProps: object,
  name: string.isRequired,
  onChange: func,
  value: oneOfType([number, string]),
  valueAlign: string
}

export const InputStepperDefaultProps = {
  buttonContext: 'primary',
  buttonProps: {},
  defaultValue: 0,
  errors: {},
  fullWidth: false,
  inputProps: {},
  valueAlign: 'center'
}
