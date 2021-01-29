/**
 * InputStepper
 */
// React
import { forwardRef } from 'react'

// UI
import styled from 'styled-components'
import { Button, InputGroup, InputGroupAddon } from '../../../'
import { FormField } from '../../field'

// Props
import { InputStepperDefaultProps, InputStepperPropTypes } from './props'

export const InputStepperComponent = forwardRef(
  (
    { buttonProps, errors, fullWidth, inputProps, onChange, name, value, valueAlign, ...props },
    ref
  ) => {
    const handleChange = type => {
      const currentVal = Number(value)
      let newVal = currentVal
      if (type === 'add') {
        if (
          inputProps.max === undefined ||
          (inputProps.max !== undefined && currentVal < inputProps.max)
        ) {
          newVal += 1
        }
      } else if (type === 'sub') {
        if (
          inputProps.min === undefined ||
          (inputProps.min !== undefined && currentVal > inputProps.min)
        ) {
          newVal -= 1
        }
      } else {
        newVal = Number(type.current.value)
      }

      onChange(newVal)
    }

    return (
      <InputGroup fullWidth={fullWidth}>
        <InputGroupAddon addonType='prepend'>
          <Button content='-' size='sm' {...buttonProps} onClick={() => handleChange('sub')} />
        </InputGroupAddon>

        <StyledFormField
          {...inputProps}
          errors={errors}
          name={name}
          onChange={onChange}
          value={value}
          textAlign={valueAlign}
          type='number'
        />

        <InputGroupAddon addonType='append'>
          <Button content='+' size='sm' {...buttonProps} onClick={() => handleChange('add')} />
        </InputGroupAddon>
      </InputGroup>
    )
  }
)

const StyledFormField = styled(FormField)`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    appearance: textfield;
  }
`

InputStepperComponent.propTypes = InputStepperPropTypes

InputStepperComponent.defaultProps = InputStepperDefaultProps
