/**
 * Components - Molecules - Table - Data
 */

// Style
import styled from 'styled-components'

export const TableData = styled.td`
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => align && 'center'};
`
