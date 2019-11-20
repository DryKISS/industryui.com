/**
 * Stepper
 */

// React
import { object } from 'prop-types'

// UI
import { STEPPER } from '../'
import { Icon, Divider } from '../../../'

// Style
import styled from 'styled-components'

export const StepperItem = ({ item }) => {
  const actions = actions => {
    return ''
  }

  return (
    <StyledStepperItem>
      <StyledIconContainer active={item.date}>
        {item.date && (
          <Icon
            aria-hidden='true'
            color={STEPPER.colourCheckmark}
            context='primary'
            fixedWidth={false}
            icon='check'
          />
        )}
      </StyledIconContainer>

      <StyledLabel active={item.date}>{item.label}</StyledLabel>

      {(item.date || item.info) && <StyledInfo>{item.date || item.info}</StyledInfo>}

      {item.actions && item.actions.length > 0 && (
        <StyledContent>{actions(item.actions)}</StyledContent>
      )}

      {item.label !== 'Closed' && <Divider style={{ borderTop: '2px solid #f5f5f5' }} />}
    </StyledStepperItem>
  )
}

const StyledStepperItem = styled.li`
  border-left: 3px solid ${({ theme }) => theme.STEPPER.colour};
  padding: 0 20px 12px;
  position: relative;

  &:last-child {
    border: 0;
    margin-left: 3px;
  }
`

const StyledIconContainer = styled.div`
  align-items: center;
  background: ${({ active, theme }) => (active ? theme.STEPPER.colour : '#fff')};
  border: 3px solid ${({ theme }) => theme.STEPPER.colour};
  border-radius: 50%;
  display: flex;
  height: 23px;
  justify-content: center;
  left: -13px;
  position: absolute;
  top: 0;
  width: 23px;
`

const StyledContent = styled.div`
  font-size: 0.8rem;
`

const StyledLabel = styled.span`
  color: ${({ active }) => (active ? '#000' : '#999')};
  font-size: 0.9rem;
  font-weight: ${({ active }) => (active ? 600 : 400)};
`

const StyledInfo = styled.span`
  color: #ccc;
  font-size: 0.75rem;
  margin-left: 8px;
`

StyledStepperItem.propTypes = {
  item: object
}
