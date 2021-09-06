/**
 * Pricing Stories
 */

// React
import React from 'react'

// UI
import pricingInfo from '../__mocks__/pricing_mock_data'
import Pricing from '../pricing'
import Readme from '../README.md'

const handlePlanSelect = (e) => {
  console.info(e)
}

export default {
  args: {
    pricingInfo: pricingInfo,
    onPlanSelect: handlePlanSelect
  },
  component: Pricing,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Pricing'
}

export const main = (args) => {
  return <Pricing {...args} />
}
