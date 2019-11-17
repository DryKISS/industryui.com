/**
 * Stepper
 */

// React
import { object } from 'prop-types'

// UI
import { STEPPER } from '../'
import { Icon } from '../../../'

// Style
import styled from 'styled-components'

export const StepperItem = ({ item }) => {
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
      {item.date && item.showDate && <StyledDate>{item.date}</StyledDate>}
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

const StyledLabel = styled.span`
  font-weight: ${({ active }) => (active ? 600 : 400)};
`

const StyledDate = styled.span`
  color: #bbb;
  font-size: 0.9rem;
  margin-left: 10px;
`

StyledStepperItem.propTypes = {
  item: object
}
