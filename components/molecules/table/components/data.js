/**
 * Table Data (td)
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

export const TableData = props => {
  return <StyledTd {...props} />
}

TableData.propTypes = {}

const StyledTd = styled.td`
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => align && 'center'};
`
