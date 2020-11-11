import { useState } from 'react'
import styled from 'styled-components'
import { PriceMatrix, PricingCard, ResizeDetector } from 'components'

const LAYOUTS = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE'
}
export const Pricing = ({ pricingInfo }) => {
  const [Layout, setLayout] = useState(LAYOUTS.DESKTOP)
  const resetLayout = width => {
    if (width < 700) {
      if (Layout !== LAYOUTS.MOBILE) setLayout(LAYOUTS.MOBILE)
    } else if (Layout !== LAYOUTS.DESKTOP) {
      setLayout(LAYOUTS.DESKTOP)
    }
  }
  return (
    <Wrapper>
      <ResizeDetector onResize={({ width }) => resetLayout(width)} />
      <PricesWrapper>
        <>
          {Layout === LAYOUTS.DESKTOP &&
            pricingInfo.map((item, index) => {
              return <PricingCard data={item} key={index} />
            })}
        </>
      </PricesWrapper>
      <PriceMatrix pricingInfo={pricingInfo} layout={Layout} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
const PricesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
`
