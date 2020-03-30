/**
 * Image
 */

// React
import { any, bool, func, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Image = ({ ...props }) => {
  // const addDefaultSrc = ev => {
  //   ev.target.src = '/static/placeholder/placeholder.svg'
  // }

  return <StyledImg itemProp='contentUrl' {...props} />
}

const StyledImg = styled.img`
  ${({ cover }) =>
    cover &&
    `
    height: 150px;
    object-fit: fill;
    width: 100%;
  `}

  ${({ fluid }) =>
    fluid &&
    `
    height: auto;
    max-width: 100%;
  `}

  ${({ rounded }) =>
    rounded &&
    `
    border-radius: .25rem;
  `}

  ${({ roundedCircle }) =>
    roundedCircle &&
    `
    border-radius: 50%;
  `}

  ${({ thumbnail, theme }) =>
    thumbnail &&
    `
    background-color: ${theme.COLOUR.light};
    border: 1px solid ${theme.COLOUR.dark};
    border-radius: .25rem;
    height: auto;
    max-width: 100%;
    padding: .65rem;
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
