/**
 * Components - Molecules - Row
 */

// React
import { memo } from 'react'
import { bool, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { themeBackground } from '../../../theme/utils/background'

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

  ${(props) =>
    props.context &&
    css`
      ${themeBackground(props)}
      color: white;
    `}

  ${({ hover }) =>
    hover &&
    css`
      :hover {
        background-color: #eee;
      }
    `}
  ${({ selected, theme }) =>
    selected &&
    css`
      background-color: ${theme.TABLE.selectedRowBackground} !important;
    `}
`)

TableRow.propTypes = {
  context: string,
  hover: bool,
  pointer: bool,
  striped: bool,
}
