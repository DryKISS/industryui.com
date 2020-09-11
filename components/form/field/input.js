/**
 * Form - Field - Input
 */

// React
import { arrayOf, bool, func, number, oneOfType, string, object } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { inputBorderRadius, ERROR_STYLE, FieldHOC, SIZE } from '../../'

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
  ...props
}) => {
  return (
    <FieldHOC
      aria-label={name}
      component={StyledInput}
      disabled={disabled}
      errors={errors[name]}
      register={register}
      key={name}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  )
}

export const StyledInput = styled.input.attrs(props => ({
  autoComplete: 'off',
  autoFocus: false
}))`
  background-clip: padding-box;
  background-color: ${({ theme }) => theme.COLOUR.white};
  border: 1px solid ${({ theme }) => theme.COLOUR.dark};
  border-radius: ${inputBorderRadius};
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: block;
  font-size: 0.75rem;
  height: 100%;
  outline: none;
  padding: 0 0.625rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: ${({ theme, errors, readOnly }) => {
      if (!readOnly) {
        return errors ? theme.COLOUR.error : theme.COLOUR.primary
      } else {
        return theme ? theme.COLOUR.darkGrey : '#CCCCCC'
      }
    }}
  }


  ::placeholder {
    color:${({ theme }) => (theme ? theme.COLOUR.darkText : '#666666')};
    opacity: 1;
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.COLOUR.light};
      cursor: not-allowed;
      border-color: ${({ theme }) => (theme ? theme.COLOUR.darkGrey : '#cccccc')};
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      background-color: transparent;
      border-color: ${({ theme }) => (theme ? theme.COLOUR.darkGrey : '#cccccc')};
      border-width: 1px;
      padding: 0.5rem;
    `}

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
  size: string,
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
