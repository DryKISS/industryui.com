/**
 * Components - Molecules - Table - Data
 */

// React
import { memo } from 'react'

// Style
import styled from 'styled-components'

const TableCaption = memo(styled.caption`
  caption-side: bottom;
  padding: ${({ theme }) => theme.TABLE.padding};
  text-align: left;
`)

export default TableCaption
