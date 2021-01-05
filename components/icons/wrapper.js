import styled, { css } from 'styled-components'

export const IconWrapper = ({
  children,
  colour,
  disabled,
  disabledColour,
  hoverColour,
  onClick,
  size,
  ...props
}) => {
  const { mainSize } = props
  let scale = 1
  if (size && mainSize && size !== mainSize && typeof size === 'number') {
    scale = Number(size / mainSize)
  }

  return (
    <StyledSvg
      colour={colour}
      disabled={disabled}
      disabledColour={disabledColour}
      fill='none'
      hoverColour={hoverColour}
      onClick={onClick}
      scale={scale !== 1 ? scale : null}
      size={size}
      xmlns='http://www.w3.org/2000/svg'
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
    disabled,
    disabledColour,
    hoverColour,
    theme: { ICONS }
  } = props
  if (state === states.DEFAULT) {
    return disabled && disabledColour
      ? disabledColour
      : disabled
      ? ICONS.disabledIconColour
      : colour || ICONS.defaultIconColour
  } else if (state === states.HOVER && hoverColour) {
    if (hoverColour === 'default') {
      hoverColour = ICONS.hoverIconColour
    }
    return disabled && disabledColour
      ? disabledColour
      : disabled
      ? ICONS.disabledIconColour
      : hoverColour || ICONS.hoverIconColour || ICONS.defaultIconColour
  }
  return colour || ICONS.defaultColour
}

const StyledSvg = styled.svg`
  ${({ size }) => {
    if (typeof size === 'number') {
      return css`
        height: ${size}px;
        width: ${size}px;
      `
    }
    return css`
      height: 22px;
      width: 22px;
    `
  }}

  path {
    transition: fill 0.2s ease;
    fill: ${props => setColour(states.DEFAULT, props)};
    ${({ scale }) => {
      return (
        scale &&
        css`
          transform: scale(${scale});
        `
      )
    }}
  }
  &:hover {
    path {
      fill: ${props => setColour(states.HOVER, props)};
    }
  }
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`
