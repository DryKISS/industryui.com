/**
 * Form - Field - Input
 */

// React
import { arrayOf, bool, func, number, oneOfType, string, object } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { FieldHOC, ERROR_STYLE } from '../../'

export const FormField = ({
  disabled,
  errors,
  name,
  placeholder,
  readOnly,
  register,
  validate,
  ...props
}) => {
  return (
    <FieldHOC
      component={StyledInput}
      aria-label={name}
      disabled={disabled}
      errors={errors[name]}
      key={name}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      {...props}
    />
  )
}

export const StyledInput = styled.input.attrs(props => ({
  autoComplete: 'off',
  autoFocus: false
}))`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.COLOUR.dark};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: block;
  height: 3rem;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: ${({ readOnly }) => (readOnly ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none')};
    outline: 0;
  }

  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }

  :-ms-input-placeholder {
    color: #c0c0c0;
  }

  :-moz-placeholder {
    color: #c0c0c0;
    opacity: 1;
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.COLOUR.light};
      cursor: not-allowed;
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      background-color: transparent;
      border: solid transparent;
      border-width: 1px 0;
      padding: 0.5rem 0;
    `}

  ${({ errors, error }) =>
    (errors || error) &&
    css`
      ${props => ERROR_STYLE(props)}
    `}
`

FormField.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, string]),
  autoFocus: bool,
  disabled: bool,
  label: string,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func,
  style: object,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  errors: {},
  readOnly: false,
  register: () => {},
  type: 'text'
}
