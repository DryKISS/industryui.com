/**
 * Components - Molecules - Video Player - Component -  Button HOC
 */

// Style
import styled from 'styled-components'

const ButtonHOC = ({ children, onClick }) => (
  <ButtonHOCWrapper onClick={onClick}>{children}</ButtonHOCWrapper>
)

const ButtonHOCWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px 10px;
  z-index: 1000;
`
export default ButtonHOC
