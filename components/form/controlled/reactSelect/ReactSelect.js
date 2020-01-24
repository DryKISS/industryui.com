/**
 * React Select
 * Utilises the select component
 *
 * @see https://github.com/JedWatson/react-select
 */

// React
import React, { forwardRef, useRef } from 'react'

// React Select
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

// UI
import { Label } from '../../'

// Components
import {
  defaultStyles,
  HiddenInput,
  reactSelectDefaultProps,
  reactSelectPropTypes
} from './components'

export const ReactSelect = ({
  async,
  cacheOptions,
  change,
  defaultOptions,
  defaultValue,
  id,
  label,
  loadOptions,
  required,
  selectedOption,
  ...props
}) => {
  const selectRef = useRef()

  const handleChange = option => {
    change({
      target: {
        checked: false,
        id,
        type: 'select',
        value: option,
        label: option ? option.label : ''
      }
    })
  }

  const value =
    (selectedOption && selectedOption.value) || (props.isMulti && selectedOption.length > 0)
      ? selectedOption
      : (defaultValue && defaultValue.value) || (props.isMulti && defaultValue.length > 0)
      ? defaultValue
      : undefined

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
    <Label id={id} text={label}>
      <Component name={id} onChange={handleChange} ref={selectRef} value={value} {...props} />
      {/* A hidden input for validation and required prop */}
      <HiddenInput selectRef={selectRef} required={required} value={!!value} />
    </Label>
  )
}

ReactSelect.propTypes = reactSelectPropTypes

ReactSelect.defaultProps = reactSelectDefaultProps(defaultStyles)
