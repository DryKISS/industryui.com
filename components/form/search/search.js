/**
 * Components - Form - Search
 */

// React
import React from 'react'
import { bool, func, object, string, oneOf } from 'prop-types'

// UI
import Button from '../../atoms/button/button/button'
import Input from '../input/input'
import Icon from '../../atoms/icon/icon/icon'
import InputGroup from '../inputGroup/group'
import InputGroupAddon from '../inputGroup/addon'

const Search = ({
  appendSearchButton,
  appendSearchIcon,
  errors,
  label,
  placeholder,
  prependSearchIcon,
  prefix,
  register,
  type
}) => {
  return (
    <InputGroup >
      {prependSearchIcon && (
        <InputGroupAddon addonType="prepend" text>
          <Icon size="sm" icon="search" prefix={prefix} />
        </InputGroupAddon>
      )}

      <Input
        errors={errors}
        name="query"
        placeholder={placeholder}
        register={register}
        size="lg"
        type={type}
      />

      {appendSearchIcon && (
        <InputGroupAddon addonType="append" text>
          <Icon icon="search" size="sm" prefix={prefix} />
        </InputGroupAddon>
      )}

      {appendSearchButton && (
        <InputGroupAddon addonType="append">
          <Button content={label || 'Search'} context="dark" size="sm" type="submit" />
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}

Search.propTypes = {
  appendSearchButton: bool,
  appendSearchIcon: bool,
  errors: object.isRequired,
  label: string,
  placeholder: string,
  prependSearchIcon: bool,
  register: func.isRequired,
  type: oneOf(['search', 'text'])
}

Search.defaultProps = {
  appendSearchButton: false,
  appendSearchIcon: false,
  prependSearchIcon: false,
  type: 'search'
}

export default Search
