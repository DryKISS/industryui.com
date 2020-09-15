/**
 * Form - Field - Input
 */

// React
import { arrayOf, bool, func, number, oneOf, oneOfType, string, object } from 'prop-types'
import { useState } from 'react'
// Style
import styled, { css } from 'styled-components'

// UI
import { COMMON_INPUT_STYLES, ERROR_STYLE, FieldHOC, SIZE } from '../../'

export const FormField = ({
  disabled,
  errors,
  name,
  placeholder,
  readOnly,
  regExp,
  register,
  size,
  validate,
  withAddon,
  ...props
}) => {
  const [isTyping, setisTyping] = useState(false)

  return (
    <FieldHOC
      aria-label={name}
      component={StyledInput}
      disabled={disabled}
      onKeyDown={e => {
        setisTyping(true)
      }}
      onBlur={() => {
        setisTyping(false)
      }}
      errors={errors[name]}
      isTyping={isTyping}
      register={register}
      key={name}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      size={size}
      withAddon={withAddon}
      {...props}
    />
  )
}

export const StyledInput = styled.input.attrs(props => ({
  autoComplete: 'off',
  autoFocus: false
}))`
${props => COMMON_INPUT_STYLES(props)}

  ${({ errors, error }) =>
    (errors || error) &&
    css`
      ${props => ERROR_STYLE(props)}
    `}

    ${({ size }) => {
      switch (size) {
        case SIZE.SM:
          return css`
            height: 1.5rem;
            font-size: 0.625rem;
          `
        case SIZE.MD:
          return css`
            height: 1.875rem;
          `
        case SIZE.LG:
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

FormField.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, string]),
  autoFocus: bool,
  disabled: bool,
  error: func.isRequired,
  label: string,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func.isRequired,
  size: oneOf([SIZE.SM, SIZE.MD, SIZE.LG]),
  style: object,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  readOnly: false,
  type: 'text'
}
