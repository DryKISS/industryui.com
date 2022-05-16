/**
 * Card - Columns
 * Cards can be organized into Masonry-like columns
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const CardColumns = ({ children }) => {
  return <StyledColumns>{children}</StyledColumns>
}

const StyledColumns = styled.div`
  display: block;
`

CardColumns.propTypes = {
  children: node.isRequired
}

export default CardColumns
