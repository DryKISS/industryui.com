/**
 * Components - Forms - Currency Input
 */

// React
import React from 'react'
import { bool, func, object, node, string } from 'prop-types'

import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../'

export const CurrencyInput = ({
  currencySymbol,
  errors,
  label,
  name,
  register,
  required,
  style,
  vat
}) => {
  return (
    <FormLabel label={label}>
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
  currencySymbol: string,
  errors: object.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  register: func.isRequired,
  required: bool,
  style: node,
  vat: bool
}

CurrencyInput.defaultProps = {
  currencySymbol: '£',
  required: true,
  vat: false
}
