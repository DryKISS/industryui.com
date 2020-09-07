/**
 * Divider
 */

// UI
import { BACKGROUND } from '../../'
import { DividerPropTypes, DividerDefaultProps } from './props'

// Style
import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  border: none;
  height: ${({ thickness }) => thickness}px;
  flex-shrink: 0;
  width: 100%;
  ${props => BACKGROUND(props)}

  ${({ vertical }) =>
    vertical &&
    css`
      width: ${({ thickness }) => thickness}px;
      height: 100%;
    `}

  margin: ${({ size, theme, vertical }) => {
    if (size === 'sm') {
      if (vertical) {
        return theme.SPACING(0, 4)
      }

      return theme.SPACING(4, 0)
    }

    if (size === 'lg') {
      if (vertical) {
        return theme.SPACING(0, 12)
      }

      return theme.SPACING(12, 0)
    }

    if (vertical) {
      return theme.SPACING(0, 8)
    }

    return theme.SPACING(8, 0)
  }};

  ${({ flexItem }) =>
    flexItem &&
    css`
      height: auto;
      align-self: stretch;
    `}

`

Divider.propTypes = DividerPropTypes
Divider.defaultProps = DividerDefaultProps
