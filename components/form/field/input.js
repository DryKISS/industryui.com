/**
 * Form - Field - Input
 */

// React
import { useState } from 'react'
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { COMMON_INPUT_STYLES, ERROR_STYLE, FieldHOC, SIZE } from '../../'

export const FormField = ({
  disabled,
  errors,
  helperMessage,
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
      helperMessage={helperMessage}
      onKeyDown={e => {
        setisTyping(true)
      }}
      onBlur={() => {
        setisTyping(false)
      }}
      errors={errors[name]}
      isTyping={isTyping}
      key={name}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      register={register}
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

  ${({ errors }) =>
    errors &&
    css`
      ${props => ERROR_STYLE(props)}
    `}

    ${({ size }) => {
      switch (size) {
        case SIZE.SM:
          return css`
            height: 1.5rem;
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
  errors: object.isRequired,
  helperMessage: string,
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
