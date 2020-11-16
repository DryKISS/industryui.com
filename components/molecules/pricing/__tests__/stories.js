/**
 * Pricing Stories
 */

// UI
import { pricingInfo } from '../__mocks__'
import { Pricing } from 'components'
import Readme from '../README.md'

export default {
  args: {},
  title: 'Molecules/Pricing',
  component: Pricing,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const handlePlanSelect = e => {
    console.log(e)
  }

  return <Pricing {...props} pricingInfo={pricingInfo} onPlanSelect={handlePlanSelect} />
}

export const main = args => <BaseComponent {...args} />
