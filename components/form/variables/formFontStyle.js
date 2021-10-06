/**
 * Components - Form - Style
 */

// Style
import { css } from 'styled-components'

// UI
import THEME_SIZE from '../../constants/size'

const formFontStyle = (size) => {
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

export default formFontStyle
