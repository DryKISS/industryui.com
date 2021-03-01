import React from 'react'
import styled from 'styled-components'

export const ClusterIcon = ({ cluster }) => {
  return <StyledClusterMarker>{cluster.getChildCount()}</StyledClusterMarker>
}
const StyledClusterMarker = styled.div`
  align-items: center;
  background-color: red;
  border-radius: 10rem;
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 2rem;
`
