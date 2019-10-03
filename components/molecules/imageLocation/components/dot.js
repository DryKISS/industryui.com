/**
 * Image Location
 */

// React
import React from 'react'
import { object } from 'prop-types'

import styled from 'styled-components'

export const Dot = ({ position }) => {
  return (
    <StyledDot position={position} />
  )
}

const StyledDot = styled.div`
  background: red;
  border-radius: 50%;
  display: none;
  height: 10px;
  position: absolute;
  width: 10px;

  ${({ position }) => position && `
    display: block;
    left: ${position.x}px;
    top: ${position.y}px;
  `}
`

Dot.propTypes = {
  position: object
}
