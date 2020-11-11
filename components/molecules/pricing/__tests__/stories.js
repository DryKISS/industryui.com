/**
 * Card Stories
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
        dark: false,
        price: '$399',
        title: 'Package One'
      },
      {
        checkList: [
          { title: 'Lorem ipsum ' },
          { title: 'Lorem ipsum dolor sit amet' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor sit' },
          { title: 'Lorem ipsum dolor sit am' }
        ],
        dark: true,
        price: '$499',
        title: 'Package Two'
      },
      {
        checkList: [
          { title: 'Lorem ipsum ' },
          { title: 'Lorem ipsum dolor sit amet' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor sit' },
          { title: 'Lorem ipsum dolor sit am' },
          { title: 'Lorem ipsum dolor sit ament' }
        ],
        dark: false,
        price: '$599',
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
  return <Pricing {...props} />
}

export const main = args => <BaseComponent {...args} />
