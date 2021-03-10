/**
 * Card - Groups
 * Use card groups to render cards as a single, attached element with equal width and height columns
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

export const CardGroups = ({ childern }) => {
  return <StyledGroups>{childern}</StyledGroups>
}

const StyledGroups = styled.div`
  display: block;
`

CardGroups.propTypes = {
  childern: node.isRequired,
}
