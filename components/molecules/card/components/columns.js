/**
 * Card - Columns
 * Cards can be organized into Masonry-like columns
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const CardColumns = ({ childern }) => {
  return <StyledColumns>{childern}</StyledColumns>
}

const StyledColumns = styled.div`
  display: block;
`

CardColumns.propTypes = {
  childern: node.isRequired
}
export default CardColumns
