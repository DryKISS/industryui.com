/**
 * Country
 */

// React
import React from 'react'
import { func, object, string } from 'prop-types'

// UI
import SelectField from './select'
import COUNTRY from '../../constants/country.en'

const SelectCountryField = ({ errors, name, register, ...props }) => {
  return (
    <SelectField errors={errors} name={name} options={COUNTRY} register={register} {...props} />
  )
}

SelectCountryField.propTypes = {
  errors: object.isRequired,
  name: string.isRequired,
  register: func.isRequired
}

export default SelectCountryField
