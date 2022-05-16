/**
 * Components - Forms - Currency
 */

// React
import React from 'react'
import { bool, func, number, object, oneOfType, node, string } from 'prop-types'

// UI
import Input from '../input/input'
import InputGroup from '../inputGroup/group'
import InputGroupAddon from '../inputGroup/addon'

const Currency = ({
  children,
  currencySymbol,
  errors,
  label,
  min,
  name,
  register,
  style,
  size,
  vat
}) => {
  const defaultOptions = {
    errors: errors[name]
  }

  return (
    <InputGroup {...defaultOptions}>
      <InputGroupAddon {...defaultOptions} addonType="prepend" size={size} text>
        {currencySymbol}
      </InputGroupAddon>

      <Input
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
  )
}

Currency.propTypes = {
  children: node,
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  min: number,
  name: string.isRequired,
  register: func.isRequired,
  style: node,
  size: string,
  vat: oneOfType([string, bool])
}

Currency.defaultProps = {
  currencySymbol: '£',
  min: 0,
  vat: 'Incl VAT'
}

export default Currency
