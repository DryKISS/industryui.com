/**
 * Background
 */

// Style
import styled from 'styled-components'

export const Background = () => {
  return (
    <StyledBackground />
  )
}

const StyledBackground = styled.div`
  background-image: url(https://web.whatsapp.com/img/8a055527b27b887521a9f084497d8879.png);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.06;
`
