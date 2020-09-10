/**
 * Input
 */

// React
import { func, node, object, oneOf, shape, string } from 'prop-types'
import styled, { css } from 'styled-components'

// UI
import { arrayOfValues, SIZE, Text } from 'components'
import { COLOUR } from 'components/theme/variables/colour'

export const InputDecorationTypes = {
  Default: 'default',
  Error: 'error',
  Success: 'success',
  Warning: 'warning',
  Disabled: 'disabled',
  ReadOnly: 'readOnly'
}

const colourPlate = {
  default: COLOUR.grey,
  error: COLOUR.error,
  success: COLOUR.formSuccess,
  warning: COLOUR.gold40,
  disabled: COLOUR.darkGrey,
  darkBorder: COLOUR.grey80,
  readOnly: COLOUR.grey,
  dark: COLOUR.darkText
}
const inputThemeColourPlate = {
  default: 'grey',
  error: 'error',
  success: 'formSuccess',
  warning: 'gold40',
  disabled: 'darkGrey',
  darkBorder: 'grey80',
  readOnly: 'grey',
  dark: 'darkText'
}

export const InputTypes = {
  Number: 'number',
  Text: 'text',
  Password: 'password'
}
const colourProvider = (theme, decoration) => {
  if (theme?.COLOUR) {
    return theme.COLOUR[inputThemeColourPlate[decoration]]
  } else {
    return colourPlate[decoration]
  }
}
export const Input = ({
  adornments,
  decoration,
  errors,
  label,
  message,
  name,
  placeholder,
  register,
  size,
  type,
  ...props
}) => {
  return (
    <Wrapper decoration={decoration}>
      {label && <StyledLabel content={label} />}
      <InputWrapper size={size}>
        {adornments?.startAdornment && (
          <StyledAdornmentWrapper className='adornment startAdornment' startAdornment size={size}>
            {adornments.startAdornment}
          </StyledAdornmentWrapper>
        )}

        <StyledInput
          adornments={adornments}
          className={`simpleInput ${errors[name]?.type}`}
          message={message}
          name={name}
          placeholder={placeholder}
          ref={register}
          size={size}
          type={type}
          disabled={props.disabled || decoration === InputDecorationTypes.Disabled}
          {...props}
        />

        {adornments?.endAdornment && (
          <StyledAdornmentWrapper className='adornment endAdornment' size={size}>
            {adornments.endAdornment}
          </StyledAdornmentWrapper>
        )}
      </InputWrapper>

      {message && <StyledMessage className='message'>{message}</StyledMessage>}
    </Wrapper>
  )
}
const borderRadius = '0.25rem'

const StyledLabel = styled(Text)`
  color: ${({ theme }) => colourProvider(theme, 'dark')};
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`
const StyledMessage = styled(Text)`
  font-size: 0.625rem;
  margin-top: 0.5rem;
`

const StyledAdornmentWrapper = styled.div`
  align-items: center;
  border: 1px solid;
  display: flex;
  height: 100%;
  ${({ startAdornment }) =>
    startAdornment
      ? css`
          border-bottom-left-radius: ${borderRadius};
          border-right: none;
          border-top-left-radius: ${borderRadius};
        `
      : css`
          border-left: none;
          border-top-right-radius: ${borderRadius};
          border-bottom-right-radius: ${borderRadius};
        `}
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
          .adornment {
            padding: 0.5rem 1rem;
          }
        `
      case SIZE.MD:
        return css`
          height: 1.875rem;
          ._,
          .adornment {
            padding: 0.75rem 1.25rem;
          }
        `
      case SIZE.LG:
        return css`
          height: 2.25rem;
          .__,
          .adornment {
            padding: 0.875rem 1.625rem;
          }
        `
      default:
        return css`
          height: 1.875rem;
          .___,
          .adornment {
            padding: 0.75rem 1.25rem;
          }
        `
    }
  }}
`
const withAdornmentStartStyles = css`
  ${({ adornments }) => {
    return (
      adornments?.startAdornment &&
      css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
    )
  }}
`
const withEndAdornmentStyles = css`
  ${({ adornments }) => {
    return (
      adornments?.endAdornment &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
    )
  }}
`

const StyledInput = styled.input`
  border: 1px solid;
  border-radius: ${borderRadius};
  font-size: 0.75rem;
  height: 100%;
  width: 100%;
  padding: 0 0.625rem;
  ::placeholder {
    color: ${({ theme }) => colourProvider(theme, 'danger')};
    opacity: 1;
  }
  &:focus {
    border-color: ${({ theme }) => (theme ? theme.COLOUR.primary : '#245EE5')};
  }
  ${withAdornmentStartStyles}
  ${withEndAdornmentStyles}
  outline: none;
`

const Wrapper = styled.div`
  width: 100%;
  ${({ decoration }) => {
    return css`
      .message {
        color: ${({ theme }) =>
          decoration !== InputDecorationTypes.Default
            ? colourProvider(theme, decoration)
            : colourProvider(theme, 'dark')};
      }
      .simpleInput {
        &.required {
          border-left-width: 0.5rem;
        }
      }
      .simpleInput,
      .adornment {
        border-color: ${({ theme }) =>
          decoration !== InputDecorationTypes.Default
            ? colourProvider(theme, decoration)
            : colourProvider(theme, 'dark')};
        ${decoration === InputDecorationTypes.ReadOnly &&
          css`
            background: transparent;
            pointer-events: none;
          `}
      }
      .adornment {
        background-color: ${({ theme }) => colourProvider(theme, decoration)};
      }
    `
  }}
`

Input.propTypes = {
  errors: object,
  label: string,
  name: string,
  onChange: func,
  placeholder: string,
  adornments: shape({
    startAdornment: node,
    endAdornment: node
  }),
  register: func.isRequired,
  type: oneOf(arrayOfValues(InputTypes))
}

Input.defaultProps = {
  type: 'text',
  size: SIZE.MD,
  decoration: InputDecorationTypes.Default
}
