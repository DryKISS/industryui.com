/**
 * Figure
 */

// React
import React from 'react'
import { any, bool, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import FigureCaption from './caption'
import FigureImage from './image'

const Figure = ({ children, className, slant, style }) => {
  return (
    <StyledFigure
      children={children}
      className={className}
      itemProp="image"
      itemScope=""
      itemType="http://schema.org/ImageObject"
      slant={slant}
      style={style}
    />
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
  display: inline-block;
  border: 0;
  margin: 0 0 1rem;
  ${(props) => props.slant && slantStyles}
`

Figure.propTypes = {
  children: node,
  className: any,
  slant: bool,
  style: objectOf(oneOfType([number, string]))
}

Figure.defaultProps = {
  slant: false
}

Figure.Caption = FigureCaption
Figure.Image = FigureImage

export default Figure
