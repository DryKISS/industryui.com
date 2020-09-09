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
const colourPlate = {
  default: COLOUR.grey,
  error: COLOUR.danger,
  success: COLOUR.success,
  warning: COLOUR.warning,
  disabled: COLOUR.darkGrey,
  readOnly: COLOUR.grey,
  dark: COLOUR.darkText
}
export const Input = ({
  adornments,
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
    <Wrapper decoration={decoration}>
      <StyledText content={label} />
      <InputWrapper size={size}>
        {adornments?.startAdornment && (
          <StyledAdornmentWrapper className='adornment startAdornment' startAdornment size={size}>
            {adornments.startAdornment}
          </StyledAdornmentWrapper>
        )}
        <StyledInput
          adornments={adornments}
          className='simpleInput'
          message={message}
          name={name}
          placeholder={placeholder}
          register={register}
          type={type}
          size={size}
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

const StyledText = styled(Text)`
  margin-bottom: 0.5rem;
  color: ${COLOUR.darkText};
  font-size: 0.75rem;
`
const StyledMessage = styled(Text)`
  font-size: 0.625rem;
  margin-top: 0.5rem;
`

const StyledAdornmentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid;
  ${({ startAdornment }) =>
    startAdornment
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
  ${withAdornmentStartStyles}
  ${withEndAdornmentStyles}
  outline: none;
`
const Wrapper = styled.div`
  width: 100%;
  ${({ decoration }) => {
    return css`
      .message {
        color: ${decoration !== InputDecorationTypes.Default
          ? colourPlate[decoration]
          : colourPlate.dark};
      }
      .simpleInput,
      .adornment {
        border-color: ${colourPlate[decoration]};
      }
      .adornment {
        background-color: ${colourPlate[decoration]};
      }
      .simpleInput {
        &:focus {
          border-color: ${({ theme }) => (theme ? theme.COLOUR.primary : '#245EE5')};
        }
      }
    `
  }}
`

Input.propTypes = {
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  placeholder: string,
  adornments: shape({
    startAdornment: node,
    endAdornment: node
  }),
  register: func.isRequired,
  type: oneOf(['number', 'password', 'text'])
}

Input.defaultProps = {
  type: 'text',
  size: SIZE.MD,
  decoration: InputDecorationTypes.Default
}
