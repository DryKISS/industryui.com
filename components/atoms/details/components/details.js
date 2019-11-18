/**
 * Components - Details
 */

// React
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Details = ({ children, open, summary }) => {
  return (
    <StyledDetails open={open}>
      <StyledSummary>{summary}</StyledSummary>
      {children}
    </StyledDetails>
  )
}

const StyledDetails = styled.details`
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  padding-bottom: 0.5rem;
`

const StyledSummary = styled.summary`
  cursor: pointer;
  font-size: 1rem;
  padding-top: 0.5rem;
  outline: none;
`

Details.propTypes = {
  children: node,
  open: bool,
  summary: string
}
