/**
 * Components - Details
 */

// UI
import { Button } from '../../atoms'
import { DetailsPropTypes, DetailsDefaultProps } from './props'

// Style
import styled from 'styled-components'

export const Details = ({
  children,
  context,
  open,
  summary,
  SummaryActionsComponent,
  style,
  Toolbar,
  ...props
}) => {
  return (
    <StyledDetails context={context} open={open}>
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
        {SummaryActionsComponent && <ActionsWrapper>{SummaryActionsComponent}</ActionsWrapper>}
        {Toolbar && <Toolbar />}
      </StyledSummary>

      <StyledBody style={style}>{children}</StyledBody>
    </StyledDetails>
  )
}

const ActionsWrapper = styled.div`
  float: right;
  width: fit-content;
`

const StyledDetails = styled.details`
  background-color: #fff;
  border: 1px solid #eee;
  border-bottom: 1px solid ${({ context, theme }) => theme.COLOUR[context]};
  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;
  margin-bottom: 0.5rem;
`

const StyledSummary = styled.summary`
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 1rem;
  position: relative;
`

const StyledButton = styled(Button)`
  float: right;
`

const StyledBody = styled.div`
  font-size: 1rem;
  padding: 0 1rem 1rem;
`

Details.propTypes = DetailsPropTypes
Details.defaultProps = DetailsDefaultProps
