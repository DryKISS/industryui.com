/**
 * Pricing Stories
 */

// UI
import { Pricing } from 'components'
import Readme from '../README.md'

export default {
  args: {
    title: 'pricing',
    pricingInfo: [
      {
        checkList: [
          { title: 'Lorem ipsum ' },
          { title: 'Lorem ipsum dolor sit ametaa' },
          { title: 'Lorem ipsum dolor' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur',
        recommended: false,
        price: '$ 399',
        title: 'Package One'
      },
      {
        checkList: [
          { title: 'Lorem ipsum ' },
          { title: 'Lorem ipsum dolor sit amet' },
          { title: 'Lorem ipsum dolor' },
          { title: 'aaaaaaaaaaaaaa' },
          { title: 'Lorem ipsum dolor sit am' }
        ],
        description: 'Lorem ipsum dolor sit amet',
        recommended: true,
        price: '$ 499',
        title: 'Package Two'
      },
      {
        checkList: [
          { title: 'Lorem ipsum ' },
          { title: 'Lorem ipsum dolor sit amet' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor sit' },
          { title: 'Lorem ipsum dolor sit am' }
        ],
        description: 'Lorem ipsum dolor sit Lorem ipsum ',
        recommended: false,
        price: '$ 599',
        title: 'Package Three'
      }
    ]
  },
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

  return <Pricing {...props} onPlanSelect={handlePlanSelect} />
}

export const main = args => <BaseComponent {...args} />
