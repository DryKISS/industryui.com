/**
 * Components - Pricing
 */

// React
import React, { useEffect, useRef, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import Button from '../../atoms/button/button/button'
import Icon from '../../atoms/icon/icon/icon'
import LAYOUTS from './components/constants'
import PriceMatrix from './components/priceMatrix'
import PricingCard from './components/pricingCard'
import PricingDropdown from './components/pricingDropdown'
import ResizeDetector from '../../utils/resizeDetector/resizeDetector'
import Text from '../../atoms/text/text'

const Pricing = ({ pricingInfo, onPlanSelect }) => {
  const WrapperRef = useRef(null)

  useEffect(() => {
    resetLayout()
    return () => {}
  }, [])

  const [Layout, setLayout] = useState(LAYOUTS.DESKTOP)
  const [SelectedPlan, setSelectedPlan] = useState(0)

  const resetLayout = () => {
    const wrapper = WrapperRef.current
    const width = wrapper.offsetWidth

    if (width > 1920) {
      if (Layout !== LAYOUTS.LARGEDESKTOP) {
        setLayout(LAYOUTS.LARGEDESKTOP)
      }
    } else if (width > 1440) {
      if (Layout !== LAYOUTS.MEDDESKTOP) {
        setLayout(LAYOUTS.MEDDESKTOP)
      }
    } else if (width > 1024) {
      if (Layout !== LAYOUTS.DESKTOP) {
        setLayout(LAYOUTS.DESKTOP)
      }
    } else if (width > 768) {
      if (Layout !== LAYOUTS.TABLET) {
        setLayout(LAYOUTS.TABLET)
      }
    } else {
      if (Layout !== LAYOUTS.MOBILE) {
        setLayout(LAYOUTS.MOBILE)
      }
    }
  }

  const handlePlanChange = (planIndex) => {
    setSelectedPlan(planIndex)
  }

  const handlePlanSelect = (e) => {
    onPlanSelect(e)
  }

  return (
    <Wrapper ref={WrapperRef}>
      <ResizeDetector onResize={({ width }) => resetLayout(width)} />

      <PricesWrapper>
        <>
          {Layout.includes(LAYOUTS.DESKTOP) ? (
            pricingInfo.map((item, index) => {
              return (
                <PricingCard
                  layout={Layout}
                  onCardSelect={handlePlanSelect}
                  data={item}
                  key={index}
                />
              )
            })
          ) : (
            <DropDownAndFeatues>
              <PricingDropdown
                onPlanChange={handlePlanChange}
                pricingInfo={pricingInfo}
                selectedPlan={SelectedPlan}
              />

              <FeaturesAndAdd>
                <div>
                  {pricingInfo[SelectedPlan].checkList.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <Icon color="rgb(69, 186, 190)" icon="check" />
                        <StyledFeature content={item.title} context="dark" size="sm" />
                      </ListItem>
                    )
                  })}
                </div>

                <AddToCartWrapper fullWidth={Layout === LAYOUTS.MOBILE}>
                  <StyledButton
                    block
                    context="deepBlue"
                    onClick={() => handlePlanSelect(pricingInfo[SelectedPlan])}
                    outline
                  >
                    Add To Cart
                  </StyledButton>
                </AddToCartWrapper>
              </FeaturesAndAdd>
            </DropDownAndFeatues>
          )}
        </>
      </PricesWrapper>

      <PriceMatrix pricingInfo={pricingInfo} layout={Layout} selectedPlan={SelectedPlan} />
    </Wrapper>
  )
}

const StyledButton = styled(Button)`
  div {
    font-weight: 600;
  }
`

const AddToCartWrapper = styled.div`
  margin-top: 1.875rem;
  margin-bottom: 1.5rem;
  width: 15rem;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

const StyledFeature = styled(Text)`
  line-height: 1.25rem;
  padding-left: 0.375rem;
`

const ListItem = styled.div`
  align-items: center;
  display: flex;
`

const FeaturesAndAdd = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

const DropDownAndFeatues = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  min-width: 21.25rem;
`

const PricesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
`

export default Pricing
