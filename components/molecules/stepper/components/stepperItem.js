/**
 * Stepper
 */

// React
import React from 'react'
import { object } from 'prop-types'

// UI
import { Button, Divider, Icon, STEPPER } from '../../../'

// Style
import styled from 'styled-components'

export const StepperItem = ({ item }) => {
  const renderContent = content =>
    content.map(
      ({ id, active, data }) =>
        active && <li key={id}>{typeof data === 'function' ? data() : data}</li>
    )

  const renderActions = actions =>
    actions.map(
      ({ id, active, content, context, data, handleClick, to, type }) =>
        active && (
          <li key={id}>
            {type === 'button' && (
              <Button
                onClick={handleClick}
                content={content}
                context={context}
                size='xs'
                {...data}
              />
            )}
          </li>
        )
    )

  return (
    <StyledStepperItem>
      <StyledIconContainer active={item.date}>
        {item.date && (
          <Icon
            aria-hidden='true'
            color={STEPPER.colourCheckmark}
            fixedWidth={false}
            icon='check'
            prefix='fas'
          />
        )}
      </StyledIconContainer>

      <StyledLabel active={item.date}>{item.label}</StyledLabel>

      {(item.date || item.info) && <StyledInfo>{item.date || item.info}</StyledInfo>}

      {item.content && item.content.length > 0 && (
        <StyledContent>{renderContent(item.content)}</StyledContent>
      )}

      {item.actions && item.actions.length > 0 && (
        <StyledContent>{renderActions(item.actions)}</StyledContent>
      )}

      {item.label !== 'Closed' && <Divider size='sm' />}
    </StyledStepperItem>
  )
}

const StyledStepperItem = styled.li`
  border-left: 3px solid ${({ theme }) => theme.STEPPER.colour};
  padding: 0 1rem 1px;
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
  height: 1.5rem;
  justify-content: center;
  left: -13px;
  position: absolute;
  top: 0;
  width: 1.5rem;
`

const StyledContent = styled.ul`
  font-size: 0.8rem;
  list-style: none;
  margin: 0.5rem;
  padding: 0;
  li {
    margin-bottom: 5px;
  }
`

const StyledLabel = styled.span`
  color: ${({ active, theme }) => (active ? theme.COLOUR.black : theme.COLOUR.dark)};
  margin: 0 0.5rem;
`

const StyledInfo = styled.span`
  font-size: 0.75rem;
`

StyledStepperItem.propTypes = {
  item: object
}
