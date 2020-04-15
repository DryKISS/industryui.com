/**
 * Components - Forms - Currency Input
 */

// React
import React from 'react'
import { bool, func, object, oneOfType, node, string } from 'prop-types'

import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../'

export const CurrencyInput = ({
  currencySymbol,
  errors,
  label,
  name,
  register,
  required,
  show,
  style,
  vat
}) => {
  return (
    <FormLabel show={show} label={label}>
      <InputGroup>
        <InputGroupAddon addonType='prepend' text>
          {currencySymbol}
        </InputGroupAddon>

        <FormField
          errors={errors}
          name={name}
          required={required}
          register={register}
          style={style}
          step='any'
          type='number'
        />

        {vat && (
          <InputGroupAddon addonType='append' text>
            Inc VAT
          </InputGroupAddon>
        )}
      </InputGroup>
    </FormLabel>
  )
}

CurrencyInput.propTypes = {
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  register: func.isRequired,
  required: bool,
  show: bool,
  style: node,
  vat: bool
}

CurrencyInput.defaultProps = {
  currencySymbol: '£',
  required: true,
  show: true,
  vat: false
}
