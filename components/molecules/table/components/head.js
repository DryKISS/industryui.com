/**
 * Table Head (th)
 */

import React from 'react'

// Style
import styled from 'styled-components'

export const TableHead = props => {
  return <StyledTh {...props} />
}

TableHead.propTypes = {}

const StyledTh = styled.th`
  border-bottom: 2px solid ${({ theme }) => theme.COLOUR.dark};
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => (align ? 'center' : 'left')};
  ${({ sortable }) => sortable && 'cursor: pointer'}
`
