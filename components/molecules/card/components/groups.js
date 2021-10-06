/**
 * Card - Groups
 * Use card groups to render cards as a single, attached element with equal width and height columns
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const CardGroups = ({ children }) => {
  return <StyledGroups>{children}</StyledGroups>
}

const StyledGroups = styled.div`
  display: block;
`

CardGroups.propTypes = {
  children: node.isRequired
}

export default CardGroups
