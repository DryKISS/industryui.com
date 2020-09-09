/**
 * Input
 */

// React
import { func, node, object, oneOf, shape, string } from 'prop-types'
import styled, { css } from 'styled-components'

// UI
import { SIZE, Text } from 'components'
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
  icons,
  label,
  message,
  name,
  placeholder,
  register,
  size,
  type,
  decoration,
  ...props
}) => {
  return (
    <Wrapper>
      <StyledText content={label} />
      <InputWrapper size={size}>
        {icons?.startIcon && (
          <StyledIconWrapper startIcon size={size} decoration={decoration}>
            {icons.startIcon}
          </StyledIconWrapper>
        )}
        <StyledInput
          decoration={decoration}
          icons={icons}
          message={message}
          name={name}
          placeholder={placeholder}
          register={register}
          type={type}
          size={size}
          {...props}
        />
        {icons?.endIcon && (
          <StyledIconWrapper size={size} decoration={decoration}>
            {icons.endIcon}
          </StyledIconWrapper>
        )}
      </InputWrapper>
      {message && <StyledMessage decoration={decoration}>{message}</StyledMessage>}
    </Wrapper>
  )
}
const borderRadius = '0.25rem'

const StyledText = styled(Text)`
  margin-bottom: 0.5rem;
  color: ${COLOUR.darkText};
  font-size: 0.75rem;
`
const StyledMessage = styled(Text)`
  ${({ decoration }) => {
    switch (decoration) {
      case InputDecorationTypes.Error:
        return css`
          color: ${COLOUR.danger};
        `
      case InputDecorationTypes.Success:
        return css`
          color: ${COLOUR.success};
        `
      case InputDecorationTypes.Warning:
        return css`
          color: ${COLOUR.warning};
        `
      case InputDecorationTypes.Disabled:
        return css`
          color: ${COLOUR.darkGrey};
        `
      case InputDecorationTypes.ReadOnly:
        return css`
          color: ${COLOUR.darkGrey};
        `
      default:
        return css`
          color: ${COLOUR.black};
        `
    }
  }}
  font-size:0.625rem;
  margin-top: 0.5rem;
`

const decorateIconWrapper = css`
  ${({ decoration }) => {
    switch (decoration) {
      case InputDecorationTypes.Error:
        return css`
          background-color: ${COLOUR.danger};
          border-color: ${COLOUR.danger};
        `
      case InputDecorationTypes.Success:
        return css`
          background-color: ${COLOUR.success};
          border-color: ${COLOUR.success};
        `
      case InputDecorationTypes.Warning:
        return css`
          background-color: ${COLOUR.warning};
          border-color: ${COLOUR.warning};
        `
      case InputDecorationTypes.Disabled:
        return css`
          background-color: ${COLOUR.darkGrey};
          border-color: ${COLOUR.darkGrey};
        `
      case InputDecorationTypes.ReadOnly:
        return css`
          background-color: ${COLOUR.grey};
          border-color: ${COLOUR.grey};
        `
      default:
        return css`
          background-color: ${COLOUR.grey};
          border-color: ${COLOUR.grey};
        `
    }
  }}
`
const StyledIconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case SIZE.SM:
        return css`
          padding: 0.5rem 1rem;
        `
      case SIZE.MD:
        return css`
          padding: 0.75rem 1.25rem;
        `
      case SIZE.LG:
        return css`
          padding: 0.875rem 1.625rem;
        `
    }
  }}
  border:1px solid;
  ${({ startIcon }) =>
    startIcon
      ? css`
          border-right: none;
          border-top-left-radius: ${borderRadius};
          border-bottom-left-radius: ${borderRadius};
        `
      : css`
          border-left: none;
          border-top-right-radius: ${borderRadius};
          border-bottom-right-radius: ${borderRadius};
        `}
  ${decorateIconWrapper}
`

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
const withIconStartStyles = css`
  ${({ icons }) => {
    return (
      icons?.startIcon &&
      css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
    )
  }}
`
const withEndIconStyles = css`
  ${({ icons }) => {
    return (
      icons?.endIcon &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
    )
  }}
`
const decorateInput = css`
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
          background-color: ${COLOUR.darkGrey};
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
  border-radius: ${borderRadius};
  font-size: 0.75rem;
  height: 100%;
  width: 100%;
  padding: 0 0.625rem;
  ${withIconStartStyles}
  ${withEndIconStyles}
  outline: none;
  &:focus {
    border-color: ${({ theme }) => (theme ? theme.COLOUR.primary : '#245EE5')};
  }
  ${decorateInput}
`
const Wrapper = styled.div`
  width: 100%;
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
