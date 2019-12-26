/**
 * Form - Field
 */

// React
import { arrayOf, bool, number, oneOfType, string, object } from 'prop-types'

// UI
import { FormError } from '../'

// Style
import styled, { css } from 'styled-components'

export const FormField = ({ errors, register, required, validate, ...props }) => {
  return (
    <>
      <StyledInput
        aria-label={props.name}
        errors={errors[props.name]}
        key={props.name}
        name={props.id}
        ref={register({
          required: required,
          pattern: props.regExp ? new RegExp(props.regExp) : null,
          validate: validate,
          ...(props.max ? { max: props.max } : null),
          ...(props.min ? { min: props.min } : null),
          ...(props.maxLength ? { maxLength: props.maxLength } : null),
          ...(props.minLength ? { minLength: props.minLength } : null)
        })}
        {...props}
      />

      <FormError message={errors[props.name] ? errors[props.name].message : ''} />
    </>
  )
}

const StyledInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    color: #9da7af;
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

  ${({ errors }) =>
    errors &&
    css`
      background: rgb(251, 236, 242);
      border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144);
      border-image: initial;
      border-style: solid;
      border-width: 1px 1px 1px 10px;
    `}
`

FormField.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, string]),
  autoFocus: bool,
  disabled: bool,
  id: string,
  label: string,
  placeholder: string,
  readOnly: bool,
  required: oneOfType([bool, string]),
  style: object,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  errors: {},
  required: true,
  readOnly: false,
  type: 'text'
}
