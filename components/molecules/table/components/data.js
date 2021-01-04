/**
 * Components - Molecules - Table - Data
 */

// React
import { string } from 'prop-types'
import { memo } from 'react'

// Style
import styled from 'styled-components'

export const TableData = memo(styled.td`
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => align && 'center'};
`)

TableData.propTypes = {
  align: string
}
