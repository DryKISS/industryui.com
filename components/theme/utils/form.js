/**
 * Theme - Utils - Form Styles
 */

// Style
import { css } from 'styled-components'

export const ERROR_STYLE = ({ theme, isTyping, withAddon }) => {
  return css`
    border-color: ${theme.COLOUR.danger};
    border-image: initial;
    border-style: solid;
    border-left-width: ${!withAddon && '0.25rem'};
    &:hover {
      border-color: ${!isTyping && theme.COLOUR.lightRed};
    }
    &:focus {
      border-color: ${theme.COLOUR.error};
    }

    ${isTyping === true &&
      css`
        box-shadow: 0px 0px 4px ${theme.COLOUR.fadeRed};
      `}
  `
}

export const COMMON_INPUT_STYLES = ({ disabled, errors, isTyping, readOnly, Required, theme }) => {
  return css`
    background-clip: padding-box;
    background-color: ${theme.COLOUR.white};
    border: 1px solid ${theme.COLOUR.grey80};
    border-radius: ${theme.FORM_ELEMENTS_STYLES.inputBorderRadius};
    box-sizing: border-box;
    color: ${theme.COLOUR.blackText};
    display: block;
    font-size: 0.75rem;
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
          return errors ? theme.COLOUR.error : theme.COLOUR.primary
        } else {
          return theme ? theme.COLOUR.darkGrey : '#CCCCCC'
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
        border-color: ${({ theme }) => (theme ? theme.COLOUR.darkGrey : '#cccccc')};
      `}

    ${readOnly &&
      css`
        background-color: transparent;
        border-color: ${({ theme }) => (theme ? theme.COLOUR.darkGrey : '#cccccc')};
        border-width: 1px;
        padding: 0.5rem;
      `}
  `
}
