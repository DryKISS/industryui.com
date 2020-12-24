/**
 * Components - Organisms - Bar
 */

// React
import { useState } from 'react'

// UI
import { BarConfig } from './config'
import { BarToggle } from './toggle'
import { BarPropTypes, BarDefaultProps } from './props'

// Style
import styled, { css } from 'styled-components'

export const Bar = ({ children, minSize, open, placement, variant, width, withToggle }) => {
  const [IsOpen, setIsOpen] = useState(open ?? true)

  const toggleOpen = () => {
    setIsOpen(!IsOpen)
  }

  return (
    <>
      <StyledBarWrapper
        open={IsOpen}
        placement={placement}
        variant={variant}
        width={width}
        minSize={minSize}
      >
        {withToggle && <BarToggle onClick={toggleOpen} open={IsOpen} placement={placement} />}

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
  background-color: ${({ theme }) => theme.BAR.background};
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
          opacity: 1;
          ${placement}: 0;
          ${(placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
            css`
              top: 0;
              align-items: center;
            `}
            ${!open &&
              css`
            margin-${placement}:-${minSize ?? theme.BAR.minSize};
            background-color: transparent;
            box-shadow: none;
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

Bar.propTypes = BarPropTypes
Bar.defaultProps = BarDefaultProps
