import styled from 'styled-components'

export const LinkPluginComponent = props => {
  return <StyledA {...props} onClick={() => {}} />
}
const StyledA = styled.a`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.LINK_COLOUR};
`
