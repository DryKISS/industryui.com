/**
 * Components - Forms - Percent
 */

// React
import React from 'react'
import { func, object, oneOfType, string } from 'prop-types'

// UI
import Input from '../input/input'
import InputGroup from '../inputGroup/group'
import InputGroupAddon from '../inputGroup/addon'

const Percent = ({ errors, label, name, register, size, symbol }) => {
  return (
    <InputGroup>
      <Input errors={errors} name={name} register={register} size={size} step="any" type="number" />

      <InputGroupAddon addonType="append" size={size} text>
        {symbol}
      </InputGroupAddon>
    </InputGroup>
  )
}

Percent.propTypes = {
  errors: object.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  register: func.isRequired,
  size: string,
  symbol: oneOfType([object, string])
}

Percent.defaultProps = {
  symbol: '%'
}

export default Percent
