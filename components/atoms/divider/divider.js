/**
 * Components - Atoms - Divider
 */

// Style
import styled, { css } from 'styled-components'

// UI
import { THEME_SIZE } from '../../theme/constants/size'
import { propTypes, defaultProps } from './props'

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

  ${({ dashed, vertical, height }) =>
    vertical &&
    css`
      width: ${({ thickness }) => (dashed ? 2 : thickness)}px;
      height: ${height ?? '100%'};
    `}

  margin: ${({ size, theme, vertical }) => {
    let margin = '1rem'

    switch (size) {
      case THEME_SIZE.XXS:
        margin = '0.25rem'
        break
      case THEME_SIZE.SM:
        margin = '0.5rem'
        break
      case THEME_SIZE.MD:
        margin = '1rem'
        break
      case THEME_SIZE.LG:
        margin = '2rem'
        break
      case THEME_SIZE.XL:
        margin = '3rem'
        break
      case THEME_SIZE.XXL:
        margin = '4rem'
        break
      case THEME_SIZE.XXXL:
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

Divider.propTypes = propTypes
Divider.defaultProps = defaultProps
