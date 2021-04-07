/**
 * Components - Molecules - Table - Data
 */

// React
import { memo } from 'react'
import { bool, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

const TableData = memo(styled.td`
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => align && 'center'};
`)

TableData.propTypes = {
  align: oneOfType([string, bool])
}

export default TableData
