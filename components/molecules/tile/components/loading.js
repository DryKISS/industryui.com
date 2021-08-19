/**
 * Tile - Loading
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

const Loading = () => (
  <>
    <StyledWrapper />
    <StyleBody />
  </>
)

const StyledWrapper = styled.div`
  background-color: #000;
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const StyleBody = styled.div`
  border: 2px solid rgba(51, 51, 51, 0.5);
  border-top-color: #fff;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  margin: 0 0.24rem;
  animation: rotate 0.8s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export default Loading
