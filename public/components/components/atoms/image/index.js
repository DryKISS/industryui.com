/**
 * Image
 *
 * @see https://getbootstrap.com/docs/4.1/content/images/
 */

// React
import React, { Component } from 'react'
import { bool, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Image = withTheme(
  class Image extends Component {
    static propTypes = {
      alt: string.isRequired,
      imageClasses: string,
      figureClasses: string,
      radius: bool,
      slant: bool,
      src: string.isRequired,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    static defaultProps = {
      radius: false,
      slant: false
    }

    render () {
      const { alt, figureClasses, imageClasses, slant, src, style } = this.props

      return (
        <StyledFigure
          className={figureClasses}
          itemProp='image'
          itemScope=''
          itemType='http://schema.org/ImageObject'
          slant={slant}
          style={style}
        >

          <StyledImg
            alt={alt}
            className={imageClasses}
            itemProp='contentUrl'
            src={src}
          />

        </StyledFigure>
      )
    }
  }
)

// Style
const StyledFigure = styled.figure`
  border: 0;
  margin: 0;

  ${({ slant }) => slant && `
    &:after {
      background: #fff;
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
  `}
`

const StyledImg = styled.img`
  /* border-style: none; */
  /* display: block; */
  /* height: auto; */
  /* max-width: 100%; */
  border-radius: .5rem .5rem 0 0;
  vertical-align: middle;
  width: 100%;
`
