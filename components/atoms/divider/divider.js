/**
 * Divider
 */

// UI
import { DividerPropTypes, DividerDefaultProps } from './props'
import { SIZE } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Divider = styled.hr`
  border: none;
  height: ${({ dashed, thickness }) => (dashed ? 2 : thickness)}px;
  flex-shrink: 0;
  width: 100%;
  ${({ context, dashed, theme, vertical }) => {
    return css`
      background-image: linear-gradient(
        ${vertical ? 0 : 90}deg,
        ${theme.COLOUR[context]},
        ${theme.COLOUR[context]} 60%,
        ${dashed ? 'transparent' : theme.COLOUR[context]} 60%,
        ${dashed ? 'transparent' : theme.COLOUR[context]} 100%
      );
      background-size: ${vertical ? '1px 11px' : ' 11px 1px'};
      border: none;
    `
  }}

  ${({ dashed, vertical }) =>
    vertical &&
    css`
      width: ${({ thickness }) => (dashed ? 2 : thickness)}px;
      height: 100%;
    `}

  margin: ${({ size, theme, vertical }) => {
    var margin = '1rem'
    switch (size) {
      case SIZE.XXS:
        margin = '0.25rem'
        break
      case SIZE.SM:
        margin = '0.5rem'
        break
      case SIZE.MD:
        margin = '1rem'
        break
      case SIZE.LG:
        margin = '2rem'
        break
      case SIZE.XL:
        margin = '3rem'
        break
      case SIZE.XXL:
        margin = '4rem'
        break
      case SIZE.XXXL:
        margin = '8rem'
        break

      default:
        break
    }
    return vertical ? '0 ' + margin : margin + ' 0'
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
