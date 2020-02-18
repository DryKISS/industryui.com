/**
 * Table Row (tr)
 */

import React from 'react'

// UI
import { BACKGROUND } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const TableRow = props => {
  return <StyledTr {...props} />
}

TableRow.propTypes = {}

const StyledTr = styled.tr`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'initial')};
  ${({ context, striped, theme }) =>
    !context &&
    striped &&
    css`
      :nth-child(odd) {
        background-color: ${theme.COLOUR.light};
      }
    `}

  ${props => props.context && BACKGROUND(props)}
  ${props =>
    props.context &&
    css`
      color: white;
    `}

  ${({ hover }) =>
    hover &&
    css`
      :hover {
        background-color: #eee;
      }
    `}
`
