/**
 * Components - Molecules - Head
 */

// React
import { bool, oneOfType, string } from 'prop-types'
import { memo } from 'react'

// Style
import styled from 'styled-components'

export const TableHead = memo(styled.th`
  border-bottom: 2px solid ${({ theme }) => theme.COLOUR.dark};
  border-top: 1px solid ${({ theme }) => theme.COLOUR.dark};
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: ${({ align }) => (align ? 'center' : 'left')};
  ${({ sortable }) => sortable && 'cursor: pointer'}
`)

TableHead.propTypes = {
  align: oneOfType([string, bool]),
  sortable: bool
}
