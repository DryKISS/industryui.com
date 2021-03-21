/**
 * Select
 */

// React
import React, { forwardRef } from 'react'
import { array, bool, object, string } from 'prop-types'

// Lodash
import _range from 'lodash/range'

// Style
import styled, { css } from 'styled-components'

// UI
import { FieldHOC } from '../hoc/index'
import { formErrorStyle, formStyle } from '../variables/style'
import { THEME_SIZE } from '../../theme/constants/size'

export const SelectField = forwardRef(
  (
    {
      data,
      defaultValue,
      disabled,
      errors,
      name,
      options,
      placeholder,
      range,
      showError,
      size,
      ...props
    },
    ref
  ) => {
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

    return (
      <FieldHOC
        component={StyledSelect}
        defaultValue={defaultValue}
        disabled={disabled}
        errors={errors[name]}
        name={name}
        ref={ref}
        showError={showError}
        size={size}
        {...data}
        {...props}
      >
        {range && range.length > 0 && renderRange()}
        {options && renderOptions()}
      </FieldHOC>
    )
  }
)

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

SelectField.propTypes = {
  data: object,
  defaultValue: string,
  disabled: bool,
  errors: object,
  name: string,
  options: array,
  placeholder: string,
  range: array,
  showError: bool
}

SelectField.defaultProps = {
  defaultValue: '',
  disabled: false,
  range: [],
  showError: false
}
