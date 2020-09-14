/**
 * Input
 */

// React
import { func, node, object, oneOf, shape, string } from 'prop-types'
import styled, { css } from 'styled-components'

// UI
import {
  Adornment,
  arrayOfValues,
  InputDecorationTypes,
  inputBorderRadius,
  SIZE,
  Space,
  Text
} from 'components'

import { COLOUR } from 'components/theme/variables/colour'

const colourPlate = {
  dark: COLOUR.darkText,
  darkBorder: COLOUR.grey80,
  default: COLOUR.grey,
  disabled: COLOUR.darkGrey,
  error: COLOUR.error,
  readOnly: COLOUR.grey,
  success: COLOUR.formSuccess,
  warning: COLOUR.gold40
}

const inputThemeColourPlate = {
  dark: 'darkText',
  darkBorder: 'grey80',
  default: 'grey',
  disabled: 'darkGrey',
  error: 'error',
  readOnly: 'grey',
  success: 'formSuccess',
  warning: 'gold40'
}

export const InputTypes = {
  NUMBER: 'number',
  TEXT: 'text',
  PASSWORD: 'password'
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
    <Wrapper theme={props.theme} decoration={decoration} readOnly={props.readOnly}>
      {label && (
        <>
          <Space marginBottom='xs'>
            <StyledLabel theme={props.theme} content={label} />
          </Space>
        </>
      )}
      <Space marginBottom='xs'>
        <InputWrapper size={size}>
          {adornments?.startAdornment && (
            <Adornment startAdornment size={size}>
              {adornments.startAdornment}
            </Adornment>
          )}

          <StyledInput
            adornments={adornments}
            disabled={props.disabled || decoration === InputDecorationTypes.DISABLED}
            message={message}
            name={name}
            placeholder={placeholder}
            readOnly={props.readOnly || decoration === InputDecorationTypes.READONLY}
            ref={register}
            size={size}
            type={type}
            required={errors[name]?.type === 'required'}
            {...props}
          />

          {adornments?.endAdornment && <Adornment size={size}>{adornments.endAdornment}</Adornment>}
        </InputWrapper>
      </Space>
      {message && <StyledMessage>{message}</StyledMessage>}
    </Wrapper>
  )
}

const StyledLabel = styled(Text)`
  color: ${({ theme }) => colourProvider(theme, 'dark')};
  font-size: 0.75rem;
`
const StyledMessage = styled(Text)`
  font-size: 0.625rem;
  color: ${({ theme, decoration }) => colourProvider(theme, 'disabled')};
`

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  ${({ size }) => {
    switch (size) {
      case SIZE.SM:
        return css`
          height: 1.5rem;
          ${Adornment} {
            padding: 0.5rem 1rem;
          }
        `
      case SIZE.MD:
        return css`
          height: 1.875rem;
          ._,/* neccessary because commit prehook cant understand switch case in styled component with selector */
          ${Adornment} {
            padding: 0.75rem 1.25rem;
          }
        `
      case SIZE.LG:
        return css`
          height: 2.25rem;
          .__,/* read the upper comment please */
          ${Adornment} {
            padding: 0.875rem 1.625rem;
          }
        `
      default:
        return css`
          height: 1.875rem;
          .___,/* read the upper comment please */
          ${Adornment} {
            padding: 0.75rem 1.25rem;
          }
        `
    }
  }}
`
const withAdornmentStyles = css`
  ${({ adornments }) => {
    return (
      adornments &&
      css`
        ${adornments.startAdornment &&
          css`
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
          `}
        ${adornments.endAdornment &&
          css`
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          `}
      `
    )
  }}
`

const StyledInput = styled.input.attrs(props => ({
  'aria-label': props.name,
  autoComplete: 'off',
  autoFocus: false
}))`
  border: 1px solid;
  border-left-width: ${({ required, adornments }) =>
    required === true && !adornments.startAdornment && ' 0.5rem'};
  border-radius: ${inputBorderRadius};
  font-size: 0.75rem;
  height: 100%;
  outline: none;
  padding: 0 0.625rem;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => (theme ? theme.COLOUR.primary : '#245EE5')};
  }
  ::placeholder {
    color: ${({ theme }) => colourProvider(theme, 'danger')};
    opacity: 1;
  }

  ${withAdornmentStyles}
`

const Wrapper = styled.div`
  width: 100%;

  ${({ decoration, readOnly, theme }) => {
    return css`
      ${StyledMessage} {
        color: ${decoration === InputDecorationTypes.DEFAULT ||
        decoration === InputDecorationTypes.WARNING ||
        decoration === InputDecorationTypes.READONLY
          ? colourProvider(theme, 'dark')
          : colourProvider(theme, decoration)};
      }

      ${StyledInput},
      ${Adornment} {
        border-color: ${decoration !== InputDecorationTypes.DEFAULT
          ? colourProvider(theme, decoration)
          : colourProvider(theme, 'dark')};
        ${decoration === InputDecorationTypes.READONLY ||
          (readOnly === true &&
            css`
              background: transparent;
              pointer-events: none;
            `)}
      }
      ${Adornment} {
        background-color: ${colourProvider(theme, decoration)};
      }
    `
  }}
`

Input.propTypes = {
  adornments: shape({
    startAdornment: node,
    endAdornment: node
  }),
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  placeholder: string,
  register: func.isRequired,
  type: oneOf(arrayOfValues(InputTypes))
}

Input.defaultProps = {
  decoration: 'default',
  type: InputTypes.TEXT,
  size: SIZE.MD
}
