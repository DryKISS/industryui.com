/**
 * Components - Form - Style
 */

// Style
import { css } from 'styled-components'

// UI
import { THEME_SIZE } from '../../theme/constants/size'

export const formStyle = ({
  disabled,
  errors,
  isTyping,
  readOnly,
  Required,
  size,
  textAlign,
  theme,
}) => {
  return css`
    background-clip: padding-box;
    background-color: ${theme.COLOUR.white};
    border: 1px solid ${theme.COLOUR.grey80};
    border-radius: ${theme.FORM_ELEMENTS_STYLES.inputBorderRadius};
    box-sizing: border-box;
    color: ${theme.COLOUR.dark};
    display: block;

    ${formfontSize(size)}
    ${Required &&
    css`
      border-right-width: 0.25rem;
    `}
    ${isTyping === true &&
    css`
      box-shadow: 0px 0px 4px ${theme.COLOUR.fadeBlue};
    `}

    outline: none;
    padding: 0 0.725rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
    &:hover {
      border-color: ${!disabled && !readOnly && theme.COLOUR.lightBlue};
    }

    &:focus {
      border-color: ${(() => {
        if (!readOnly) {
          return errors ? theme.COLOUR.danger : theme.COLOUR.primary
        } else {
          return theme ? theme.COLOUR.dark : theme.COLOUR.light
        }
      })()};
    }

    ::placeholder {
      color: ${theme ? theme.COLOUR.grey80 : '#cccccc'};
      opacity: 1;
    }
    ${disabled &&
    css`
      background: ${theme.COLOUR.grey};
      cursor: not-allowed;
      border-color: ${({ theme }) => (theme ? theme.COLOUR.dark : theme.COLOUR.light)};
    `}

    ${readOnly &&
    css`
      background-color: ${({ theme }) => (theme ? theme.COLOUR.light : 'rgb(241,241,241)')};
      border-color: ${({ theme }) => (theme ? theme.COLOUR.dark : '#cccccc')};
      border-width: 1px;
      padding: 0.5rem;
    `}

      ${textAlign &&
    css`
      text-align: ${textAlign};
    `}
  `
}

export const formErrorStyle = ({ theme, isTyping, withAddon }) => {
  return css`
    border-color: ${theme.COLOUR.danger};
    border-image: initial;
    border-style: solid;
    border-left-width: ${!withAddon && '0.25rem'};
    &:hover {
      border-color: ${!isTyping && theme.COLOUR.danger};
    }
    &:focus {
      border-color: ${theme.COLOUR.danger};
    }

    ${isTyping === true &&
    css`
      box-shadow: 0px 0px 4px ${theme.COLOUR.danger};
    `}
  `
}

export const formfontSize = (size) => {
  switch (size) {
    case THEME_SIZE.SM:
      return css`
        font-size: 0.625rem;
      `
    case THEME_SIZE.MD:
      return css`
        font-size: 1rem;
      `
    case THEME_SIZE.LG:
      return css``
    default:
      return css`
        font-size: 1rem;
      `
  }
}
