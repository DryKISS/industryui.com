/**
 * Components - Form - Select
 */

// React
import React from 'react'
import { array, bool, func, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'
import formStyle from '../variables/formStyle'
import THEME_SIZE from '../../constants/size'

const Select = ({
  data,
  defaultValue,
  disabled,
  errors,
  name,
  options,
  placeholder,
  range,
  register,
  showError,
  size
}) => {
  const renderRange = () => {
    const options = [
      <option disabled value="" key="initial0">
        {placeholder}
      </option>
    ]

    for (let key = range[1]; key < range[0]; key++) {
      options.push(
        <option key={`range${key}`} value={key}>
          {key}
        </option>
      )
    }

    return options
  }

  const renderOptions = (items) => {
    if (items) {
      options = items
    }

    return options.map(({ disabled, group, items, label, value }) => {
      if (group) {
        return (
          <optgroup key={`option${group}`} label={group}>
            {renderOptions(items)}
          </optgroup>
        )
      }

      return <option children={label} disabled={disabled} key={`option${value}`} value={value} />
    })
  }

  return (
    <FieldHOC
      component={StyledSelect}
      data={{ ...data }}
      defaultValue={defaultValue}
      disabled={disabled}
      errors={errors[name]}
      name={name}
      register={register}
      showError={showError}
      size={size}
    >
      {range && range.length > 0 && renderRange()}
      {options && renderOptions()}
    </FieldHOC>
  )
}

const StyledSelect = styled.select`
  text-transform: none;

  ${(props) => formStyle(props)}

  ${({ size }) => {
    switch (size) {
      case THEME_SIZE.SM:
        return css`
          height: 1.5rem;
          font-size: 0.625rem;
        `
      case THEME_SIZE.MD:
        return css`
          height: 1.875rem;
        `
      case THEME_SIZE.LG:
        return css`
          height: 2.25rem;
        `
      default:
        return css`
          height: 2.25rem;
        `
    }
  }}
`

Select.propTypes = {
  data: object,
  defaultValue: string,
  disabled: bool,
  errors: object.isRequired,
  name: string.isRequired,
  options: array,
  placeholder: string,
  range: array,
  register: func.isRequired,
  showError: bool
}

Select.defaultProps = {
  defaultValue: '',
  disabled: false,
  range: [],
  showError: false
}

export default Select
