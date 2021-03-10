/**
 * Components - Icons - Wrapper
 */

// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

export const IconWrapper = ({
  children,
  colour,
  disabled,
  disabledColour,
  hoverColour,
  onClick,
  size,
  translate,
  ...props
}) => {
  const { mainSize } = props

  if (typeof size === 'string') {
    let tmpSize = 22

    switch (size) {
      case 'xxxs':
        tmpSize = 8
        break
      case 'xxs':
        tmpSize = 12
        break
      case 'xs':
        tmpSize = 16
        break
      case 'sm':
        tmpSize = 20
        break
      case 'md':
        tmpSize = 24
        break
      case 'lg':
        tmpSize = 32
        break
      case 'xl':
        tmpSize = 36
        break
      case 'xxl':
        tmpSize = 40
        break
      case 'xxxl':
        tmpSize = 48
        break
      default:
        tmpSize = 22
        break
    }
    size = tmpSize
  } else {
    size = size || 22
  }

  let scale = 1

  if (mainSize && size !== mainSize) {
    scale = Number(size / mainSize)
  }

  return (
    <StyledSvg
      colour={colour}
      disabled={disabled}
      disabledColour={disabledColour}
      hoverColour={hoverColour}
      onClick={onClick}
      scale={scale}
      size={size}
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
    transition: fill 0.2s ease;
    fill: ${(props) => setColour(states.DEFAULT, props)};
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
