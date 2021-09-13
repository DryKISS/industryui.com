/**
 * Components - Form - Field - Input
 */

// Style
import styled, { css } from 'styled-components'

// UI
import formStyle from '../../variables/formStyle'
import formErrorStyle from '../../variables/formErrorStyle'
import THEME_SIZE from '../../../constants/size'

const StyledInput = styled.input`
  ${(props) => formStyle(props)}

  ${({ errors }) =>
    errors &&
    css`
      ${(props) => formErrorStyle(props)}
    `}

    ${({ size }) => {
    switch (size) {
      case THEME_SIZE.SM:
        return css`
          height: 1.5rem;
        `
      case THEME_SIZE.MD:
        return css`
          height: 1.875rem;
        `
      case THEME_SIZE.LG:
        return css`
          height: 2.25rem;
        `
      default:
        return css`
          height: 2.25rem;
        `
    }
  }}
`

export default StyledInput
