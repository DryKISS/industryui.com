/**
 * Components - Molecules - Stepper - Item
 */

// React
import React from 'react'
import { object, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import ActiveCircle from './icons/activeCircle'
import Button from '../../../atoms/button/button/button'
import CheckedCircle from './icons/checkedCircle'
import CircleQuestionIcon from '../../../icons/components/circleQuestion'
import Divider from '../../../atoms/divider/divider'
import DottedCircle from './icons/dottedCircle'
import FullScreenIcon from '../../../icons/components/fullScreen'
import PlayCircleIcon from '../../../icons/components/playCircle'

const renderContent = (content) =>
  content.map(
    ({ id, data, active }) =>
      active && (
        <StyledContentWrapper key={id}>
          {typeof data === 'function' ? data() : data}
        </StyledContentWrapper>
      )
  )

const renderActions = (actions) =>
  actions.map(
    ({ id, active, content, context, data, handleClick, to, type }) =>
      active && (
        <li key={id}>
          {type === 'button' && (
            <Button onClick={handleClick} content={content} context={context} size="xs" {...data} />
          )}
        </li>
      )
  )

const renderLabelIcon = (labelIcon) => {
  switch (labelIcon) {
    case 'video':
      return <PlayCircleIcon />
    case 'quiz':
      return <CircleQuestionIcon />
    case 'fullscreen':
      return <FullScreenIcon />
    default:
      return <CircleQuestionIcon />
  }
}

const StepperItem = ({ item, maxWidth }) => {
  return (
    <StyledStepperItem active={item.active !== false} deactivated={item.deactivated}>
      <ShowInRow>
        <ShowInColumn>
          <MainContent maxWidth={maxWidth}>
            <StyledIconContainer>
              {!item.date && item.deactivated === true ? (
                <DottedCircle active={false} />
              ) : item.date ? (
                <CheckedCircle />
              ) : (
                <ActiveCircle />
              )}
            </StyledIconContainer>

            <StyledLabelWrapper active={item.date}>
              {item.labelIcon && renderLabelIcon(item.labelIcon)}
              <StyledLabel>{item.label}</StyledLabel>{' '}
              {item.date && <StyledDate>{item.date}</StyledDate>}
            </StyledLabelWrapper>

            {item.info && <StyledInfo>{item.info}</StyledInfo>}
            {item.content && item.content.length > 0 && (
              <StyledContent>{renderContent(item.content)}</StyledContent>
            )}
          </MainContent>

          {item.actions
            ? item.actions &&
              item.actions.length > 0 && (
                <StyledContent>{renderActions(item.actions)}</StyledContent>
              )
            : item.active && item.bottomBar}
        </ShowInColumn>

        {item.active && item.toolBar}
      </ShowInRow>

      {item.label !== 'Closed' && <Divider size="sm" />}
    </StyledStepperItem>
  )
}
const ShowInColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const MainContent = styled.div`
  max-width: ${({ maxWidth }) => maxWidth ?? '400px'};
`

const ShowInRow = styled.div`
  display: flex;
`

const StyledContentWrapper = styled.li`
  color: ${({ theme }) => theme.STEPPER.colourContent};
  font-size: 0.75rem;
  line-height: 0.825rem;
`

const StyledInfo = styled.p`
  color: ${({ theme }) => theme.STEPPER.colourInfo};
  font-size: 12px;
  font-style: italic;
  margin: 0;
  padding: 0.25rem;
`

const StyledStepperItem = styled.li`
  border-left: 3px solid
    ${({ theme, deactivated }) =>
      deactivated ? theme.STEPPER.colourDeactivated : theme.STEPPER.colour};

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

const StyledLabelWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin: 0 0.25rem;
`
const StyledLabel = styled.span`
  color: ${({ active, theme }) => (active ? theme.COLOUR.black : theme.COLOUR.dark)};
`

const StyledDate = styled.span`
  color: ${({ theme }) => theme.STEPPER.colourDate};
  font-size: 0.75rem;
  font-weight: 700;
`

StyledStepperItem.propTypes = {
  item: object,
  maxWidth: string
}

export default StepperItem
