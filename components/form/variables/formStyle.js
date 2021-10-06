/**
 * Components - Form - Style
 */

// Polished
import { transparentize } from 'polished'

// Style
import { css } from 'styled-components'

// UI
import formFontStyle from './formFontStyle'

const formStyle = ({
  disabled,
  errors,
  isTyping,
  readOnly,
  required,
  size,
  textAlign,
  theme,
  withAddon
}) => {
  return css`
    background-clip: padding-box;
    background-color: ${theme.COLOUR.white};
    border: 1px solid ${theme.COLOUR.light};
    border-radius: ${theme.FORM_ELEMENTS_STYLES.inputBorderRadius};
    box-sizing: border-box;
    color: ${theme.COLOUR.dark};
    display: block;

    ${formFontStyle(size)}

    outline: none;
    padding: 0 0.725rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;

    ::placeholder {
      color: ${transparentize(0.5, theme.COLOUR.dark)};
    }

    &:focus {
      border-color: #86b7fe;
      box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
      outline: 0;
    }

    &:invalid {
      border-color: #dc3545;
    }

    &:active {
      filter: brightness(90%);
    }

    ${required &&
    css`
      border-right-width: 0.25rem;
    `}

    ${isTyping === true &&
    css`
      box-shadow: 0px 0px 4px ${theme.COLOUR.secondary};
    `}

    // React Select
    /* ${({ errors }) =>
      errors &&
      css`
        ._,
        & > div:first-of-type > div:first-of-type {
          ${(props) => formErrorStyle(props)}
        }
      `}
     */

    ${errors &&
    css`
      border-color: ${theme.COLOUR.danger};
      border-image: initial;
      border-style: solid;
      border-left-width: ${!withAddon && '0.25rem'};
      padding: 0.5rem;

      ${isTyping === true &&
      css`
        box-shadow: 0px 0px 4px ${theme.COLOUR.danger};
      `}

      &:hover,
      &:focus {
        border-color: ${!isTyping && theme.COLOUR.danger};
      }
    `}

    ${disabled &&
    css`
      background: ${theme.COLOUR.grey};
      cursor: not-allowed;
    `}

    ${!readOnly &&
    css`
      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
        outline: none;
      }
    `}

    ${readOnly &&
    css`
      background-color: ${({ theme }) => theme.COLOUR.light};
      border: 1px solid ${({ theme }) => theme.COLOUR.light};
      padding: 0.5rem;
    `}

    ${textAlign &&
    css`
      text-align: ${textAlign};
    `}
  `
}

export default formStyle
