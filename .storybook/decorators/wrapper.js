/**
 * Wrapper
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

//UI
import { blendLinearRgb } from 'components'

export const Wrapper = story => {
  return (
    <StyledWrapper
      style={{ background: blendLinearRgb(0.2, 'rgb(0, 0, 0)', 'rgba(0, 32, 255, 0.04') }}
    >
      {story()}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 1rem;
  position: relative;
`
