/**
 * Table Row (tr)
 */

// UI
import { BACKGROUND } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const TableRow = styled.tr`
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
`
