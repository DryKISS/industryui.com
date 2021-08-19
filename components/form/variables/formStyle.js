/**
 * Components - Form - Style
 */

// Style
import { css } from 'styled-components'

// UI
import formFontStyle from './formFontStyle'

const formStyle = ({ disabled, errors, isTyping, readOnly, Required, size, textAlign, theme }) => {
  return css`
    background-clip: padding-box;
    background-color: ${theme.COLOUR.white};
    border: 1px solid ${theme.COLOUR.grey80};
    border-radius: ${theme.FORM_ELEMENTS_STYLES.inputBorderRadius};
    box-sizing: border-box;
    color: ${theme.COLOUR.dark};
    display: block;

    ${formFontStyle(size)}
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

export default formStyle
