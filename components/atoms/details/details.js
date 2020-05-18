/**
 * Components - Details
 */

// React
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Details = ({ children, open, style, summary, ...props }) => {
  return (
    <StyledDetails open={open} {...props}>
      <StyledSummary>{summary}</StyledSummary>
      <StyledBody style={style}>{children}</StyledBody>
    </StyledDetails>
  )
}

const StyledDetails = styled.details`
  background-color: #fff;
  border: 1px solid #eee;
  border-bottom: 1px solid rgb(0, 204, 188);
  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;
  margin-bottom: 0.5rem;
`

const StyledSummary = styled.summary`
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 1rem;
`

const StyledBody = styled.div`
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
