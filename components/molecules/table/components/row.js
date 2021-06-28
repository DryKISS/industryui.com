/**
 * Components - Molecules - Row
 */

// React
import { memo } from 'react'
import { bool, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import themeBackground from '../../../utils/background'

const TableRow = memo(styled.tr`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'initial')};

  ${({ context, striped, theme }) =>
    !context &&
    striped &&
    `
      :nth-child(odd) {
        background-color: ${theme.COLOUR.light};
      }
    `}

  ${(props) =>
    props.context &&
    `
      ${themeBackground(props)}
      color: white;
    `}

  ${({ hover }) =>
    hover &&
    `
      :hover {
        background-color: #eee;
      }
    `}

  ${({ selected, theme }) =>
    selected === true &&
    `
      background-color: ${theme.TABLE.selectedRowBackground} !important;
    `}
`)

TableRow.propTypes = {
  context: string,
  hover: bool,
  pointer: bool,
  striped: bool
}

export default TableRow
