/**
 * Image
 */

// React
import { any, bool, func, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Image = styled.img.attrs(props => ({
  itemProp: 'contentUrl'
}))`
  ${({ cover }) =>
    cover &&
    css`
      height: 150px;
      object-fit: fill;
      width: 100%;
    `}

  ${({ fluid }) =>
    fluid &&
    css`
      height: auto;
      max-width: 100%;
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 0.25rem;
    `}

  ${({ roundedCircle }) =>
    roundedCircle &&
    css`
      border-radius: 50%;
    `}

  ${({ thumbnail, theme }) =>
    thumbnail &&
    css`
      background-color: ${theme.COLOUR.light};
      border: 1px solid ${theme.COLOUR.dark};
      border-radius: 0.25rem;
      height: auto;
      max-width: 100%;
      padding: 0.65rem;
    `}
`

Image.propTypes = {
  alt: string.isRequired,
  className: any,
  click: func,
  cover: bool,
  fluid: bool,
  rounded: bool,
  roundedCircle: bool,
  src: string.isRequired,
  style: objectOf(oneOfType([number, string])),
  thumbnail: bool
}

Image.defaultProps = {
  fluid: true,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
}
