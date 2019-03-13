/**
 * Image
 *
 * @see https://getbootstrap.com/docs/4.1/content/images/
 */

// React
import { any, bool, func, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Image = ({
  alt,
  className,
  click,
  cover,
  imageClasses,
  slant,
  src,
  style
}) => {
  return (
    <StyledFigure
      className={className}
      itemProp='image'
      itemScope=''
      itemType='http://schema.org/ImageObject'
      slant={slant}
      style={style}
    >

      <StyledImg
        alt={alt}
        className={imageClasses}
        cover={cover}
        itemProp='contentUrl'
        onClick={click}
        src={src}
      />

    </StyledFigure>
  )
}

const slantStyles = `
  &:after {
    background-color: #fff;
    bottom: 0;
    content: '';
    display: block;
    height: 25%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewy(6deg);
    transform-origin: 0 100%;
    width: 100%;
    z-index: 1;
  }
`

const StyledFigure = styled.figure`
  border: 0;
  margin: 0;
  ${props => props.slant && slantStyles}
`

const coverStyles = `
  height: 150px;
  width: 100%;
  object-fit: fill;
`

const StyledImg = styled.img`
  ${props => props.cover && coverStyles}
  vertical-align: middle;
  width: 100%;
`

Image.propTypes = {
  alt: string.isRequired,
  className: any,
  click: func,
  cover: bool,
  imageClasses: string,
  slant: bool,
  src: string.isRequired,
  style: objectOf(oneOfType([
    number,
    string
  ]))
}

Image.defaultProps = {
  slant: false
}
