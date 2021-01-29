/**
 * InputStepper
 */
// UI
import { Button, FormField, InputGroup, InputGroupAddon } from '../../../'

// Props
import { InputStepperDefaultProps, InputStepperPropTypes } from './props'

export const InputStepper = ({
  buttonProps,
  defaultValue,
  errors,
  fullWidth,
  getValues,
  inputProps,
  name,
  register,
  setValue,
  valueAlign
}) => {
  const handleChange = type => {
    const val = Number(getValues(name))
    setValue(name, type === 'add' ? val + 1 : val - 1)
  }

  return (
    <InputGroup fullWidth={fullWidth}>
      <InputGroupAddon addonType='prepend'>
        <Button content='-' size='sm' {...buttonProps} onClick={() => handleChange('sub')} />
      </InputGroupAddon>

      <FormField
        defaultValue={defaultValue}
        errors={errors}
        name={name}
        register={register}
        textAlign={valueAlign}
        {...inputProps}
      />

      <InputGroupAddon addonType='append'>
        <Button content='+' size='sm' {...buttonProps} onClick={() => handleChange('add')} />
      </InputGroupAddon>
    </InputGroup>
  )
}

InputStepper.propTypes = InputStepperPropTypes

InputStepper.defaultProps = InputStepperDefaultProps
