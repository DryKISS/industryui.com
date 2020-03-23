/**
 * Components - Details
 */

// React
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Details = ({ children, open, style, summary }) => {
  return (
    <StyledDetails open={open}>
      <StyledSummary>{summary}</StyledSummary>
      <StyledBody style={style}>{children}</StyledBody>
    </StyledDetails>
  )
}

const StyledDetails = styled.details`
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;
`

const StyledSummary = styled.summary`
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 1rem;
`

const StyledBody = styled.summary`
  font-size: 1rem;
  padding: 0 1rem 1rem;
`

Details.propTypes = {
  children: node.isRequired,
  open: bool,
  summary: string.isRequired
}

Details.defaultProps = {
  open: false
}
