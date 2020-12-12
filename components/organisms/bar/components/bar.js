/**
 * Bar
 */

// React
import { useState } from 'react'
import { BarConfig, Icon } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const Bar = ({
  background,
  children,
  flat,
  minSize,
  open,
  placement,
  variant,
  width,
  withExposedButton
}) => {
  const [IsOpen, setIsOpen] = useState(open ?? true)
  const toggleOpen = () => {
    setIsOpen(!IsOpen)
  }

  return (
    <>
      <StyledBarWrapper
        background={background}
        flat={flat}
        open={IsOpen}
        placement={placement}
        variant={variant}
        width={width}
        minSize={minSize}
      >
        <OpenButton
          background={background}
          flat={flat}
          exposed={withExposedButton}
          onClick={toggleOpen}
          open={IsOpen}
          placement={placement}
        >
          <Icon icon='user' size='1x' prefix='fas' />
        </OpenButton>

        {children}
      </StyledBarWrapper>

      <StyledOverlay
        onClick={toggleOpen}
        open={IsOpen}
        placement={placement}
        variant={variant}
        width={width}
      />
    </>
  )
}

const OpenButton = styled.div`
  border-radius: 0.25rem;
  cursor: pointer;
  display: none;
  z-index: 1;
  position: absolute;
  svg {
    transition: transform ${({ theme }) => theme.BAR.transitionDuration} ease;
    transform: rotate(0deg);
    position: absolute;
    top: 1rem;
    right: 0.2rem;
  }
  ${({ background, exposed, flat, placement }) =>
    (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
    css`
    border-top-${placement}-radius:0;
    border-bottom-${placement}-radius:0;
    display:${exposed ? 'block' : 'none'};
    width:1.5rem;
    height:3rem;
    ${placement}:100%;
    background-color:${({ background, theme }) => (theme ? theme.COLOUR[background] : 'white')};
    box-shadow:${!flat &&
      (placement === BarConfig.PLACEMENT.LEFT
        ? '2px 1px 2px 0px rgb(0 0 0 / 13%)'
        : '-2px 1px 2px 0px rgb(0 0 0 / 13%)')} ;
    `}
  ${({ open }) =>
    open === true &&
    css`
      ._,
      svg {
        transform: rotate(180deg);
      }
    `}
`

const StyledOverlay = styled.div`
  transition: ${({ theme, placement }) => css`
  opacity ${theme.BAR.transitionDuration} ${theme.BAR.transitionTiming},
  ${placement} ${theme.BAR.transitionDuration} ${theme.BAR.transitionTiming};
  `};
  ${({ placement, variant, width }) =>
    variant === BarConfig.VARIANT.OVERLAY &&
    (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
    css`
      width: calc(100% - ${width}rem);
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
      top: 0;
      position: absolute;
      ${placement}: ${width}rem;
    `}
  ${({ open, placement }) =>
    !open &&
    css`
      opacity: 0;
      pointer-events: none;
      width: 100%;
      ${placement}: 0;
    `}
`

const StyledBarWrapper = styled.div`
  align-items: center;
  background-color: ${({ background, theme }) => (theme ? theme.COLOUR[background] : 'white')};
  box-shadow: ${({ flat }) => !flat && ' 0px 4px 4px rgba(0, 0, 0, 0.25)'};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition-duration: ${({ theme }) => theme.BAR.transitionDuration};
  transition-property: left, opacity, right, width;
  transition-timing-function: ${({ theme }) => theme.BAR.transitionTiming};

  ${({ minSize, open, placement, theme, width }) =>
    placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM
      ? css`
          width: 100%;
          height: ${minSize ?? theme.BAR.minSize};
          flex-direction: row;
        `
      : open
      ? css`
          width: ${width}rem;
        `
      : css`
          width: ${minSize ?? theme.BAR.minSize};
        `}

  ${({ minSize, open, placement, theme, variant }) =>
    variant === BarConfig.VARIANT.OVERLAY
      ? css`
          position: absolute;
          opacity:1;
          ${placement}: 0;
          ${(placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
            css`
              top: 0;
              align-items: center;
            `}
            ${!open &&
              css`
            margin-${placement}:-${minSize ?? theme.BAR.minSize};
            background-color:transparent;
            box-shadow:none;
            `}
          ${(placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM) &&
            css`
              left: 0;
            `}
        `
      : css`
          float: ${placement};
        `}
`

Bar.propTypes = {}

Bar.defaultProps = {
  width: 10,
  placement: 'left',
  variant: 'push',
  background: 'white'
}
