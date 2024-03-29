/**
 * Components - Organisma - Messaging - Components - Base - Components - Loading Spinner
 */

// Style
import styled from 'styled-components'

const Loadingspinner = styled.div`
  border: 2px solid rgba(0, 168, 232, 0.1);
  border-top-color: ${({ theme: { MESSAGING } }) => MESSAGING.translatorTextColour};
  border-radius: 100%;
  height: ${({ size }) => (size ? `${size}px` : '10px')};
  width: ${({ size }) => (size ? `${size}px` : '10px')};
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
export default Loadingspinner
