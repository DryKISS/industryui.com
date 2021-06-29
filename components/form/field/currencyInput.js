/**
 * Components - Forms - Currency Input
 */

// React
import React from 'react'
import { bool, func, number, object, oneOfType, node, string } from 'prop-types'

// UI
import FormField from './input'
import FormLabel from '../label/label'
import InputGroup from '../inputGroup/group'
import InputGroupAddon from '../inputGroup/addon'

const CurrencyInput = ({
  children,
  currencySymbol,
  errors,
  label,
  min,
  name,
  register,
  show,
  style,
  size,
  vat
}) => {
  const defaultOptions = {
    error: errors[name]
  }

  return (
    <FormLabel show={show} label={label}>
      <InputGroup {...defaultOptions}>
        <InputGroupAddon {...defaultOptions} addonType="prepend" size={size} text>
          {currencySymbol}
        </InputGroupAddon>

        <FormField
          errors={errors}
          min={min}
          name={name}
          register={register}
          style={style}
          size={size}
          step="any"
          type="number"
        />

        {vat && (
          <>
            <InputGroupAddon {...defaultOptions} addonType="append" size={size} text>
              {vat}
            </InputGroupAddon>
            {children}
          </>
        )}
      </InputGroup>
    </FormLabel>
  )
}

CurrencyInput.propTypes = {
  children: node,
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  min: number,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  style: node,
  size: string,
  vat: oneOfType([string, bool])
}

CurrencyInput.defaultProps = {
  currencySymbol: '£',
  min: 0,
  show: true,
  size: 'md',
  vat: 'Incl VAT'
}

export default CurrencyInput
