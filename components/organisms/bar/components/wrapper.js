/**
 * Components - Organisms - Bar - Components - Wrapper
 */

// React
import { bool, node, number, oneOf, string } from 'prop-types'

// UI
import { BarConfig } from './config'

// Style
import styled, { css } from 'styled-components'

// export const BarWrapper = ({ children, minSize, open, placement, variant, width }) => {
//   return (
//     <StyledBarWrapper
//       open={open}
//       minSize={minSize}
//       placement={placement}
//       variant={variant}
//       width={width}
//     />

//   )
// }

export const BarWrapper = styled.aside`
  background-color: ${({ theme }) => theme.BAR.background};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  position: relative;
  transition-duration: ${({ theme }) => theme.BAR.transitionDuration};
  transition-property: left, opacity, right, width;
  transition-timing-function: ${({ theme }) => theme.BAR.transitionTiming};

  ${({ minSize, open, placement, theme, width }) =>
    placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM
      ? css`
          flex-direction: row;
          height: ${minSize ?? theme.BAR.minSize};
          width: 100%;
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
          opacity: 1;
          position: fixed;
					z-index:1;
          ${placement}: 0;
          ${(placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) &&
            css`
              top: 0;
            `}
            ${!open &&
              css`
                background-color: transparent;
                box-shadow: none;
                margin-${placement}:-${minSize ?? theme.BAR.minSize};
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

BarWrapper.propTypes = {
  children: node,
  minSize: string,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  variant: oneOf(['push', 'overlay']),
  width: number
}

BarWrapper.defaultProps = {
  placement: 'left',
  variant: 'overlay',
  width: 10
}
