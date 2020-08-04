/**
 * Components - Details
 */

// React
import { bool, node, string } from 'prop-types'

// UI
import { Button } from '../../atoms'

// Style
import styled from 'styled-components'

export const Details = ({ children, open, style, summary, Toolbar, ...props }) => {
  return (
    <StyledDetails open={open} {...props}>
      <StyledSummary>
        {summary}
        {props.button && (
          <StyledButton
            content={props.button || 'Add New'}
            context='secondary'
            onClick={props.handleClick}
            size='sm'
          />
        )}
        {Toolbar && <Toolbar />}
      </StyledSummary>

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
  position: relative;
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top: 0.75rem;
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
