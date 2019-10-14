/**
 * Image Location
 */

// React
import React from 'react'
import { object } from 'prop-types'

import styled from 'styled-components'

export const Dot = ({ coordinates }) => {
  return (
    <StyledDot coordinates={coordinates} />
  )
}

const StyledDot = styled.div`
  background: red;
  border-radius: 50%;
  display: none;
  height: 10px;
  position: absolute;
  width: 10px;

  ${({ coordinates }) => coordinates && `
    display: block;
    left: ${coordinates.x}px;
    top: ${coordinates.y}px;
  `}
`

Dot.propTypes = {
  position: object
}
