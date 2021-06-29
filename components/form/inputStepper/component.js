/**
 * Components - Form - InputStepper
 */

// React
import React, { forwardRef } from 'react'

// Style
import styled from 'styled-components'

// UI
import Button from '../../atoms/button/button/button'
import InputGroup from '../inputGroup/group'
import InputGroupAddon from '../inputGroup/addon'
import FormField from '../field/input'

// Props
import { defaultProps, propTypes } from './props'

const InputStepperComponent = forwardRef(
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
    const handleChange = (type) => {
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
        <InputGroupAddon addonType="prepend">
          <Button
            content="-"
            context={buttonContext}
            size="sm"
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
          type="number"
        />

        <InputGroupAddon addonType="append">
          <Button
            content="+"
            context={buttonContext}
            size="sm"
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

InputStepperComponent.propTypes = propTypes
InputStepperComponent.defaultProps = defaultProps

export default InputStepperComponent
