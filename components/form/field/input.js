/**
 * Components - Form - Field - Input
 */

// React
import React, { useState } from 'react'
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { FieldHOC } from '../hoc'
import { formStyle, formErrorStyle } from '../variables/style'
import { THEME_SIZE } from '../../theme/constants/size'

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
      onKeyDown={(e) => {
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

export const StyledInput = styled.input.attrs((props) => ({
  autoComplete: 'off',
  autoFocus: false,
}))`
  ${(props) => formStyle(props)}

  ${({ errors }) =>
    errors &&
    css`
      ${(props) => formErrorStyle(props)}
    `}

    ${({ size }) => {
    switch (size) {
      case THEME_SIZE.SM:
        return css`
          height: 1.5rem;
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
  size: oneOf([THEME_SIZE.SM, THEME_SIZE.MD, THEME_SIZE.LG]),
  style: object,
  textAlign: string,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))]),
}

FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  errors: {},
  readOnly: false,
  type: 'text',
}
