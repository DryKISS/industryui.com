/**
 * Components - Form - Select
 */

// React
import React from 'react'
import { array, bool, func, object, string } from 'prop-types'

// Lodash
import _range from 'lodash/range'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'
import formErrorStyle from '../variables/formErrorStyle'
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

    _range(range[1], range[0]).map((i) =>
      options.push(
        <option key={`range${i}`} value={i}>
          {i}
        </option>
      )
    )

    return options
  }

  const renderOptions = (items) => {
    if (items) {
      options = items
    }

    return options.map(({ disabled, group, items, text, value }) => {
      if (group) {
        return (
          <optgroup key={`option${group}`} label={group}>
            {renderOptions(items)}
          </optgroup>
        )
      }

      return <option children={text} disabled={disabled} key={`option${value}`} value={value} />
    })
  }

  console.log({ ...data })

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

  ${({ errors }) =>
    errors &&
    css`
      ${(props) => formErrorStyle(props)}
    `}
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
