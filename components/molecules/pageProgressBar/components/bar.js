/**
 * Molecules - Page Progress Bar - Bar
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// Styled Components
import styled from 'styled-components'

export const Bar = ({ animationDuration, context, progress }) => (
  <StyledBar
    context={context}
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`
    }}
  />
)

Bar.propTypes = {
  animationDuration: number.isRequired,
  context: string,
  progress: number.isRequired
}

const StyledBar = styled.div`
  background-color: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
  height: 0.25rem;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1031;
`
