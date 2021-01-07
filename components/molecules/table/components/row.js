/**
 * Components - Molecules - Row
 */

// React
import { memo } from 'react'
import { bool, string } from 'prop-types'

// UI
import { BACKGROUND } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const TableRow = memo(styled.tr`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'initial')};

  ${({ context, striped, theme }) =>
    !context &&
    striped &&
    css`
      :nth-child(odd) {
        background-color: ${theme.COLOUR.light};
      }
    `}

  ${props =>
    props.context &&
    css`
      ${BACKGROUND(props)}
      color: white;
    `}

  ${({ hover }) =>
    hover &&
    css`
      :hover {
        background-color: #eee;
      }
    `}
`)

TableRow.propTypes = {
  context: string,
  hover: bool,
  pointer: bool,
  striped: bool
}
