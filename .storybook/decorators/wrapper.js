/**
 * Wrapper
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

//UI
import { blendLinearRgb } from '../../components/utils/colour/colour'

const Wrapper = Story => {
  return (
    <StyledWrapper
      style={{ background: blendLinearRgb(0.2, 'rgb(0, 0, 0)', 'rgba(0, 32, 255, 0.04') }}
    >
      <Story />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 1rem;
  position: relative;
`

export default Wrapper
