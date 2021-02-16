/**
 * Components - Pricing
 */

// React
import React, { useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import { ClickAwayListener, Icon, Text } from '../../../'

export const PricingDropdown = ({ onPlanChange, pricingInfo, selectedPlan }) => {
  const [IsOpen, setIsOpen] = useState(false)

  const selected = pricingInfo[selectedPlan]

  const handleClickAway = () => {
    setIsOpen(false)
  }
  const handleClickOnWrapper = () => {
    setIsOpen(true)
  }

  const handlePlanClick = planIndex => {
    onPlanChange(planIndex)
    setTimeout(() => {
      setIsOpen(false)
    }, 0)
  }

  return (
    <Wrapper onClick={handleClickOnWrapper} onClickAway={handleClickAway}>
      <TitleWrapper>
        <StyledTitle content={selected.title} context='dark' size='xl' />
      </TitleWrapper>
      <PriceAndDropIconWrapper>
        <StyledPrice content={selected.price} size='lg' context='deepBlue' />
        <StyledDownIcon icon='caret-down' prefix='fas' />
      </PriceAndDropIconWrapper>
      <PlansWrapper open={IsOpen}>
        {pricingInfo.map((item, index) => {
          return (
            <PriceElement
              key={index}
              isLast={index === pricingInfo.length - 1}
              onClick={() => handlePlanClick(index)}
            >
              <ElementTitleAndDescriptionsWrapper>
                <StyledElementTitle
                  content={item.title}
                  context={item.recommended ? 'deepBlue' : 'dark'}
                  size='sm'
                />
                <StyledElementDescription
                  content={item.description}
                  context={item.recommended ? 'deepBlue' : 'dark'}
                  size='xs'
                />
              </ElementTitleAndDescriptionsWrapper>
              <PriceAndDropIconWrapper>
                {item.recommended && (
                  <StyledRecomendedText content='Recommend by IUI' context='gold40' size='xs' />
                )}
                <StyledPrice content={item.price} size='lg' context='deepBlue' />
              </PriceAndDropIconWrapper>
            </PriceElement>
          )
        })}
      </PlansWrapper>
    </Wrapper>
  )
}

const StyledRecomendedText = styled(Text)`
  font-weight: 700;
  margin-inline-end: 2rem;
`

const StyledElementDescription = styled(Text)``

const StyledElementTitle = styled(Text)`
  font-weight: 700;
`

const ElementTitleAndDescriptionsWrapper = styled.div``

const PriceElement = styled.div`
  align-items: center;
  ${({ theme, isLast }) =>
    css`
      border-bottom: ${isLast ? '0' : '1'}px solid ${theme.COLOUR.dark};
      background-color: ${theme.COLOUR.white};
    `}
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 1.25rem;
`

const PlansWrapper = styled(ClickAwayListener)`
  border: 1px solid ${({ theme }) => `${theme.COLOUR.dark}`};
  border-radius: 9px;
  left: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 3.7rem;
  transition-property: opacity, transform;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  transform: translateY(-20px);
  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      transform: translateY(0px);
      pointer-events: initial;
    `}
  width: 100%;
`

const StyledDownIcon = styled(Icon).attrs(props => ({
  color: props.theme.COLOUR.deepBlue
}))``

const StyledPrice = styled(Text)`
  font-weight: 600;
`
const PriceAndDropIconWrapper = styled.div`
  align-items: center;
  display: flex;
`
const StyledTitle = styled(Text)`
  font-weight: 600;
`
const TitleWrapper = styled.div``

const Wrapper = styled(ClickAwayListener)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLOUR.watterBlue};
  border: 1px solid ${({ theme }) => `${theme.COLOUR.dark}`};
  border-radius: 9px;
  cursor: pointer;
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  margin: 6px;
  padding: 0 1.5rem;
  position: relative;
  width: 100%;
`
