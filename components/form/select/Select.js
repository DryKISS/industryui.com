/**
 * Select
 */

// React
import { forwardRef } from 'react'
import { array, bool, object, string } from 'prop-types'

// Lodash
import _range from 'lodash/range'

// UI
import { ERROR_STYLE, FieldHOC, inputBorderRadius } from '../../'

// Style
import styled, { css } from 'styled-components'

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
        <option disabled value='' key='initial0'>
          {placeholder}
        </option>
      ]

      _range(range[1], range[0]).map(i =>
        options.push(
          <option key={`range${i}`} value={i}>
            {i}
          </option>
        )
      )

      return options
    }

    const renderOptions = items => {
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
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.COLOUR.dark};
  border-radius: ${inputBorderRadius};
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  height: 2.25rem;
  &:focus {
    border-color: ${({ theme }) => (theme ? theme.COLOUR.primary : '#245EE5')};
    color: ${({ theme }) => theme.COLOUR.dark};
    outline: 0;
  }

  ${({ errors }) =>
    errors &&
    css`
      ${props => ERROR_STYLE(props)}
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
