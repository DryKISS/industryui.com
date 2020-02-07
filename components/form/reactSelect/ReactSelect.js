/**
 * React Select
 * Utilises the select component
 *
 * @see https://github.com/JedWatson/react-select
 */

// React
import React, { forwardRef } from 'react'

import { Controller } from 'react-hook-form'

// React Select
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

// UI
import { FormError } from '../'

// Components
import { defaultStyles, reactSelectDefaultProps, reactSelectPropTypes } from './components'

export const ReactSelectField = ({
  async,
  cacheOptions,
  control,
  defaultOptions,
  defaultValue,
  errors,
  loadOptions,
  required,
  name,
  options,
  selectedOption,
  ...props
}) => {
  const Component = forwardRef((data, ref) => {
    return async ? (
      <AsyncSelect
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
        cacheOptions={cacheOptions}
        ref={ref}
        {...data}
      />
    ) : (
      <Select ref={ref} {...data} />
    )
  })
  return (
    <>
      <Controller
        as={<Component options={options} selectedOption={selectedOption} {...props} />}
        control={control}
        defaultValue={defaultValue}
        name={name}
        onChange={([selected]) => {
          return { value: selected }
        }}
        rules={{ required }}
      />
      <FormError message={errors[name] ? errors[name].message : ''} />
    </>
  )
}

ReactSelectField.propTypes = reactSelectPropTypes

ReactSelectField.defaultProps = reactSelectDefaultProps(defaultStyles)
