/**
 * Wrapper
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Wrapper = story => {
  return <StyledWrapper>{story()}</StyledWrapper>
}

const StyledWrapper = styled.div`
  background-color: #eee;
  padding: 1rem;
  position: relative;
`
