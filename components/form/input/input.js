/**
 * Input
 */

// React
import { func, node, object, oneOf, shape, string } from 'prop-types'
import styled, { css } from 'styled-components'

// UI
import { SIZE } from 'components'
import { COLOUR } from 'components/theme/variables/colour'

export const InputDecorationTypes = {
  Default: 'default',
  Error: 'error',
  Success: 'success',
  Warning: 'warning',
  Disabled: 'disabled',
  ReadOnly: 'readOnly'
}

export const Input = ({
  errors,
  icons,
  label,
  name,
  placeholder,
  register,
  size,
  type,
  decoration,
  ...props
}) => {
  return (
    <InputWrapper size={size}>
      <StyledInput
        errors={errors}
        name={name}
        placeholder={placeholder}
        register={register}
        type={type}
        size={size}
        decoration={decoration}
        {...props}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  width: 100%;
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
    }
  }}
`
const withIconStyles = css`
  ${({ icons }) => {
    icons?.startIcon &&
      css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
  }}
  ${({ icons }) => {
    icons?.endIcon &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
  }}
`
const decorate = css`
  ${({ decoration }) => {
    switch (decoration) {
      case InputDecorationTypes.Error:
        return css`
          border-color: ${COLOUR.danger};
        `
      case InputDecorationTypes.Success:
        return css`
          border-color: ${COLOUR.success};
        `
      case InputDecorationTypes.Warning:
        return css`
          border-color: ${COLOUR.warning};
        `
      case InputDecorationTypes.Disabled:
        return css`
          border-color: ${COLOUR.darkGrey};
        `
      case InputDecorationTypes.ReadOnly:
        return css`
          border-color: ${COLOUR.grey};
        `
      default:
        return css`
          border-color: ${COLOUR.black};
        `
    }
  }}
`
const StyledInput = styled.input.attrs(props => ({
  disabled: props.disabled || props.decoration === InputDecorationTypes.Disabled
}))`
  border: 1px solid;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  height: 100%;
  width: 100%;
  padding: 0 0.625rem;
  ${({ icons }) => icons && withIconStyles}
  outline: none;
  &:focus {
    border-color: ${({ theme }) => (theme ? theme.COLOUR.primary : '#245EE5')};
  }
  ${decorate}
`

Input.propTypes = {
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  placeholder: string,
  icons: shape({
    startIcon: node,
    endIcon: node
  }),
  register: func.isRequired,
  type: oneOf(['number', 'password', 'text'])
}

Input.defaultProps = {
  type: 'text',
  size: SIZE.MD,
  decoration: InputDecorationTypes.Default
}
