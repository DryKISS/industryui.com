/**
 * Components - Icons - Wrapper
 */

// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

const IconWrapper = ({
  children,
  colour,
  disabled,
  disabledColour,
  hoverColour,
  onClick,
  size,
  stroke,
  translate,
  ...props
}) => {
  const { mainSize } = props
  let tmpSize = ''

  if (typeof size === 'string') {
    switch (size) {
      case 'xs':
        tmpSize = 12
        break
      case 'sm':
        tmpSize = 16
        break
      case 'lg':
        tmpSize = 24
        break
      case 'xl':
        tmpSize = 32
        break
      default:
        tmpSize = 20
        break
    }
  } else {
    tmpSize = size || 20
  }

  let scale = 1

  if (mainSize && tmpSize !== mainSize) {
    scale = Number(tmpSize / mainSize)
  }

  return (
    <StyledSvg
      colour={colour}
      disabled={disabled}
      disabledColour={disabledColour}
      hoverColour={hoverColour}
      onClick={onClick}
      scale={scale}
      size={tmpSize}
      stroke={stroke}
      translate={translate}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </StyledSvg>
  )
}

const states = {
  DEFAULT: 'default',
  HOVER: 'hover'
}

const setColour = (state, props) => {
  let {
    colour,
    context,
    disabled,
    disabledColour,
    hoverColour,
    theme: { ICONS, THEME_COLOUR }
  } = props

  const defaultColour = context ? THEME_COLOUR.context : colour || ICONS.defaultIconColour

  if (state === states.DEFAULT) {
    return disabled && disabledColour
      ? disabledColour
      : disabled
      ? ICONS.disabledIconColour
      : defaultColour
  }

  if (state === states.HOVER && hoverColour) {
    if (hoverColour === true) {
      hoverColour = ICONS.hoverIconColour
    }

    return disabled && disabledColour
      ? disabledColour
      : disabled
      ? ICONS.disabledIconColour
      : hoverColour || ICONS.hoverIconColour || defaultColour
  }

  if (disabled) {
    return disabledColour || ICONS.disabledIconColour
  }

  return defaultColour
}

const StyledSvg = styled.svg`
  ${({ size }) => {
    if (typeof size === 'number') {
      return css`
        height: ${size}px;
        width: ${size}px;
      `
    }
  }}

  path {
    fill: ${(props) => setColour(states.DEFAULT, props)};
    stroke: ${({ stroke }) => stroke};
    transition: fill 0.2s ease;

    ${({ scale, translate }) => {
      return (
        scale &&
        css`
          transform: scale(${scale}) ${translate || ''};
        `
      )
    }}
  }

  &:hover {
    path {
      fill: ${(props) => setColour(states.HOVER, props)};
    }
  }

  ${({ onClick, disabled }) =>
    onClick &&
    !disabled &&
    css`
      cursor: pointer;
    `}
`

export default IconWrapper
