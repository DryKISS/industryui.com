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
    {
      buttonContext,
      buttonProps,
      className,
      errors,
      fullWidth,
      inputProps,
      onChange,
      name,
      style,
      value,
      valueAlign
    },
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
        newVal = Number(type.target.value)
      }

      onChange(newVal)
    }

    return (
      <InputGroup className={className} fullWidth={fullWidth} style={style}>
        <InputGroupAddon addonType='prepend'>
          <Button
            content='-'
            context={buttonContext}
            size='sm'
            {...buttonProps}
            onClick={() => handleChange('sub')}
          />
        </InputGroupAddon>

        <StyledFormField
          {...inputProps}
          errors={errors}
          name={name}
          onChange={handleChange}
          value={value}
          textAlign={valueAlign}
          type='number'
        />

        <InputGroupAddon addonType='append'>
          <Button
            content='+'
            context={buttonContext}
            size='sm'
            {...buttonProps}
            onClick={() => handleChange('add')}
          />
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
