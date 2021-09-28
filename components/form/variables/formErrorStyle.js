/**
 * Components - Form - Style
 */

// Style
import { css } from 'styled-components'

const formErrorStyle = ({ theme, isTyping, withAddon }) => {
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

export default formErrorStyle
